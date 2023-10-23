/* eslint-disable jsx-a11y/heading-has-content */
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { useContext } from "react";
import { Contextdata } from "../Context/ProductLoad";
import { useSelector, useDispatch } from "react-redux";
import { addtocart } from "../Redux/Slice/Slice";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { styled } from "@mui/material/styles";
import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Typography from "@mui/material/Typography";
import ButtonBase from "@mui/material/ButtonBase";

function Product() {
  const notify = () => toast(`Item is add on cart `);

  const [verified, setVerified] = useState(false);

  useEffect(() => {
    const token = localStorage.getItem("token");

    axios
      .get("https://tech-trova.vercel.app/dashboard", {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      })
      .then((response) => {
        console.log(response.data);
        setVerified(true);
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
      });
  }, []);

  const dispatch = useDispatch();
  const select = useSelector((state) => state.cart.data);
  const data = useContext(Contextdata);
  console.log(select);

  const { id } = useParams();

  const handleClick = (item, id) => {
    const itemid = id;
    const userid = localStorage.getItem("userid");
    console.log(itemid, userid);

    if (verified) {
      dispatch(
        addtocart({
          user_id: userid,
          id: item.ID,
          name: item.Name,
          image: item.Image,
          quantity: item.quantity,
          price: item.Saleprice,
        }),
        notify()
      );
      // Call the notify function here after adding to the cart
    } else {
      alert("Please log in first to add to cart.");
    }
  };

  return (
    <div className="product_Contanier">
      {data
        .filter((item) => item.ID === parseInt(id))
        .map((item, index) => (
          <Paper
            sx={{
              p: 2,
              margin: "auto",
              maxWidth: 1000,
              flexGrow: 1,
              backgroundColor: (theme) =>
                theme.palette.mode === "dark" ? "#1A2027" : "#fff",
            }}
          >
            <Grid container spacing={2}>
              <Grid item>
                <ButtonBase sx={{ width: 450, height: 600, boxShadow: 2 }}>
                  <Img alt={`${item.Name}`} src={`${item.Image}`} />
                </ButtonBase>
              </Grid>
              <Grid item xs={12} sm container>
                <Grid item xs container direction="column" spacing={2}>
                  <Grid item xs>
                    <Typography
                      gutterBottom
                      variant="title1"
                      component="h1"
                    >
                      {`${item.Name}`}
                    </Typography>
                    <Typography
                      gutterBottom
                      variant="title1"
                      component="h2"
                    >
                      {`${item.DetailName}`}
                    </Typography>
                    <Typography variant="body1" gutterBottom component="h1">
                      {`${item.brandname}`}
                    </Typography>
                    <Typography variant="body2" color="red" component="h1">
                      {`Ratings: ${item.Rating}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="h1">
                      {`${item.MRP}`}
                    </Typography>
                    <Typography variant="body2" color="text.secondary" component="h1">
                      {`${item.Warranty}`}
                    </Typography>
                  </Grid>
                  <Grid item >
                    <Typography
                      onClick={() => {
                        verified
                          ? handleClick(item, item.ID)
                          : (window.location = "/login");
                      }}
                      sx={{ cursor: "pointer" }}
                      variant="title2"
                      border={5}
                      bgcolor={"yellow"}
                      padding={1}
                      container="h1"
                      borderRadius={5}
                      borderColor={"orangered"}
                      fontWeight={"bold"}
                      fontSize={32}
                    >
                      Add To Cart
                    </Typography>
                  </Grid>
                </Grid>
                <Grid item>
                  <Typography variant="title1" component="h3">
                    {`${item.Saleprice}`}
                  </Typography>
                  <ToastContainer/>
                </Grid>
              </Grid>
            </Grid>
          </Paper>
        ))}
    </div>
  );
}

export default Product;

const Img = styled("img")({
  margin: "auto",
  display: "block",
  maxWidth: "100%",
  maxHeight: "100%",
});
