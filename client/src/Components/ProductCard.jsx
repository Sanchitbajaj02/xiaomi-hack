import React from "react";
import { Link } from "react-router-dom";

const Card = ({ product }) => {
  return (
    <div className="card text-white bg-dark border border-info ">
      <div className="card-header lead">{product.name}</div>
      <div className="card-body">
        <div className="rounded border border-success p-2">
          <img
            src={product.img}
            alt="pic"
            style={{ maxHeight: "100%", maxWidth: "100%" }}
            className="mb-3 rounded"
          />
        </div>
        <div className="row">
          <div className="col-12">
            <Link
              className="btn btn-block btn-outline-success mt-2 mb-2"
              to={`/products/${product.name}`}
            >
              View Products
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Card;
