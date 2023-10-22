const mongoose = require('mongoose');


const startConnection=()=>{

    mongoose.connect(process.env.MONGO)
    .then((res)=>{
        console.log(`Server is Connected to ${res.connection.host}`);
    })
    .catch((err)=>{
        console.log(`Error connecting to MongoDB ${err.message}`);
    });

}

module.exports = startConnection;