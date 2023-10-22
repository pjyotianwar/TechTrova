const express = require("express");
const connectDB = require("./db/config");
const routes = require("./routes/routes");
require("dotenv").config();

// const productData = require('../ProductData');
// const PRODUCTS = require('./model/productSchema');

const stripe = require("stripe")(process.env.STRIPE.toString());

const app = express();
const PORT = process.env.PORT;


const startConnection = async () => {
  try {
    await connectDB();
    app.listen(PORT, () => {
      console.log(`Server is Runing on http://localhost:${PORT}`);
    });
    // try {
    //   await PRODUCTS.deleteMany({});
    //   const storeData = await PRODUCTS.insertMany(productData);
    // } catch (err) {
    //   console.log(`Error is found inserting Data ${err}`);
    // }
  } catch (err) {
    console.log(`Database Connection Error ${err.message}`);
  }
};

const path = require('path')

if(process.env.NODE_ENV==='production')
{

    app.use('/' , express.static('backend/build'))

    app.get('*' , (req , res)=>{

          res.sendFile(path.resolve(__dirname, 'backend/build/index.html'));

    })

}

app.use(express.json());
app.use("/", routes);

// Payment Gateway

app.post("/api/create-checkout-session", async (req, res) => {
  const { products } = req.body;
  console.log(products);
  const lineItems = products.map((product) => ({
    price_data: {
      currency: "inr",
      product_data: {
        name: product.name,
      },
      unit_amount: product.price * 100,
    },
    quantity: product.quantity,
  }));
  const session = await stripe.checkout.sessions.create({
    payment_method_types: ["card"],
    line_items: lineItems,
    mode: "payment",
    success_url: "http://localhost:3000/Success",
    cancel_url: "http://localhost:3000/Cancel",
  });
  res.json({ id: session.id });
});

app.get('/', (req, res) => res.send('Hello World!'))

startConnection();