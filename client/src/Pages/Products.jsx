import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { Container, Grid } from "@mui/material";

const Products = () => {
  const navigate = useNavigate();

  const products = [
    {
      name: "TV",
      description: "MI TV",
      img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Xiaomi_TV_P1E_65_1.jpg",
    },

    {
      name: "TV",
      description: "MI TV",
      img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Xiaomi_TV_P1E_65_1.jpg",
    },

    {
      name: "TV",
      description: "MI TV",
      img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Xiaomi_TV_P1E_65_1.jpg",
    },

    {
      name: "TV",
      description: "MI TV",
      img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Xiaomi_TV_P1E_65_1.jpg",
    },

    {
      name: "TV",
      description: "MI TV",
      img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Xiaomi_TV_P1E_65_1.jpg",
    },

    {
      name: "TV",
      description: "MI TV",
      img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Xiaomi_TV_P1E_65_1.jpg",
    },
  ];
  return (
    <Container>
      <Grid container>
        {products.map((product, index) => {
          return (
            <>
              <Grid item md={4} sx={{ padding: 2 }}>
                <Card key={index}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.img}
                    alt="green iguana"
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                    <Typography variant="body2" color="text.secondary">
                      {product.description}
                    </Typography>
                  </CardContent>
                  <CardActions>
                    <Button
                      size="medium"
                      onClick={() => {
                        navigate(`/product/${product.name}`);
                      }}>
                      Proceed
                    </Button>
                    {/* <Button size="small">Learn More</Button> */}
                  </CardActions>
                </Card>
              </Grid>
            </>
          );
        })}
      </Grid>
    </Container>
  );
};

export default Products;
