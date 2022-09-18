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
      name: "Television",
      category: "television",
      img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1642760767.3293196.png?width=200&height=200",
    },
    {
      name: "Phone",
      category: "phone",
      img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1646677552.54578474.png?width=200&height=200",
    },
    {
      name: "Laptop",
      category: "laptop",
      img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1648710112.01265192.jpg?width=200&height=200",
    },
    {
      name: "Accessories",
      category: "pc-accessories",
      img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1578894892.69244518.jpg?width=200&height=200",
    },
    {
      name: "Bands and Fitness",
      category: "bands-fitness",
      img: "https://i01.appmifile.com/v1/MI_18455B3E4DA706226CF7535A58E875F0267/pms_1624301201.40829012.jpg?width=200&height=200",
    },
  ];
  return (
    <Container>
      <Grid container sx={{ marginTop: 2, marginBottom: 5 }}>
        {products.map((product, index) => {
          return (
            <>
              <Grid item md={4} sx={{ padding: 5 }}>
                <Card key={index}>
                  <CardMedia
                    component="img"
                    height="250"
                    image={product.img}
                    alt="green iguana"
                  />
                  <CardContent sx={{ textAlign: "center" }}>
                    <Typography gutterBottom variant="h5" component="div">
                      {product.name}
                    </Typography>
                  </CardContent>
                  <CardActions sx={{ justifyContent: "center" }}>
                    <Button
                      variant="contained"
                      size="medium"
                      sx={{ width: "50%", backgroundColor: "common.black" }}
                      onClick={() => {
                        navigate(`/product/${product.category}`);
                      }}>
                      Proceed
                    </Button>
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
