import React, { useState, useEffect, useContext } from "react";
import { useParams } from "react-router-dom";
import { StoreContext } from "../Utils/StoreContext";

import { showProductByCategory } from "../Utils/apiBuilder";

const ProductCategory = () => {
  const { productID } = useParams();
  const { store, setStore } = useContext(StoreContext);

  const { token } = store.user;

  useEffect(() => {
    showProductByCategory(token, productID)
      .then((res) => {
        console.log(res);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [token, productID]);

  return (
    <>
      <section className="container mt-5">
        <h1>Product: {productID}</h1>

        <div className="row">
          <div className="col-md-4">
            <div class="card">
              <div class="card-body">
                <h4 class="card-title">Title</h4>
                <p class="card-text">Text</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default ProductCategory;
