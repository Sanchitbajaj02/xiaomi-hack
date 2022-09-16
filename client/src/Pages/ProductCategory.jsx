import React from "react";
import { useParams } from "react-router-dom";

const ProductCategory = () => {
  const { productId } = useParams();

  return <div>ProductCategory: {productId}</div>;
};

export default ProductCategory;
