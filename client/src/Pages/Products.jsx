import React, { useState } from "react";
import Card from "../Components/ProductCard";

const Products = () => {
  const [products, setProducts] = useState({
    name: "TV",
    description: "MI TV",
    img: "https://www.notebookcheck.net/fileadmin/Notebooks/News/_nc3/Xiaomi_TV_P1E_65_1.jpg",
  });
  return (
    <div className="container text-center">
      <div className="row">
        <div className="col-6">
          <Card product={products} />
        </div>
      </div>
    </div>
  );
};

export default Products;
