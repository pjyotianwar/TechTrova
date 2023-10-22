import React from "react";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Typography from "@mui/material/Typography";
import { Box, Button, CardActionArea, CardActions } from "@mui/material";

const ProductCard = (prop) => {
  const { img, id, name, rating, salePrice, branmrp, category } = prop;
  console.log(prop);
  return (
    <Card
      sx={{
        height: 500,
        width: 300,
        borderRadius: 5,
        rowGap: 10,
        columnGap: 10,
        alignContent: "center"
      }}
    >
      <CardActionArea sx={{
        height: 450,
        width: 300,
      }}
      >
        <CardMedia component="img" height="300" image={img} alt={name} />
        <CardContent>
          <Typography gutterBottom variant="heading" component="div">
            {name.substr(0, 25)+".."}
          </Typography>
          <Box>
          <Typography sx={{ display:'inline' }} color="text.secondary">
            Rating:
          </Typography>
          <Typography variant="body2" display={"inline"}>
            {rating}
          </Typography>
          </Box>
          <Box>
          <Typography sx={{ display:'inline' }} color="text.secondary">
            Sale Price:
          </Typography>
          <Typography variant="body2" display={"inline"}>
            {salePrice}
          </Typography>
          </Box>
          <Box>
          <Typography sx={{ display:'inline' }} color="text.secondary">
            MRP:
          </Typography>
          <Typography variant="body2" display={"inline"}>
            {branmrp}
          </Typography>
          </Box>
        </CardContent>
      </CardActionArea>
      <CardActions >
        <Button
          size="large"
          color="primary"
          href={`/product/${id}/${category}`}
        >
          Add to Cart
        </Button>
      </CardActions>
    </Card>
  );
};

export default ProductCard;
