import React, { useContext } from "react";
import { Contextdata } from "../Context/ProductLoad";
import Grid from "@mui/material/Grid";
import ProductCard from "../Card/ProductCard";

const Tablet = () => {
  const Data = useContext(Contextdata);

  return (
    <Grid
      sx={{ flexGrow: 1, padding: 10 }}
      container
      justifyContent="center"
      spacing={5}
    >
      {Data &&
        Data.filter((item) => item.ID <= 60 && item.ID > 48).map(
          (item, index) => {
            return (
              <Grid item sx>
                <ProductCard
                  key={index}
                  img={item.Image}
                  id={item.ID}
                  name={item.Name}
                  rating={item.Rating}
                  salePrice={item.Saleprice}
                  branmrp={item.MRP}
                  category={item.category}
                />
              </Grid>
            );
          }
        )}
    </Grid>
  );
};

export default Tablet;
