import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { StoreContext } from "./Utils/StoreContext";

import Dashboard from "./Pages/Dashboard";
import Order from "./Pages/Order";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Navbar from "./Components/Navbar";
import ProductCategory from "./Pages/ProductCategory";

const Router = () => {
  const [store, setStore] = useState({
    products: [],
    cart: [],
    user: {},
  });

  return (
    <>
      <StoreContext.Provider value={{ store, setStore }}>
        <Navbar />
        <Routes>
          <Route path="/" element={<Login />} />
          <Route path="/dashboard" element={<Dashboard />} />
          <Route path="/login" element={<Login />} />
          <Route path="/order" element={<Order />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:productId" element={<ProductCategory />} />
        </Routes>
      </StoreContext.Provider>
    </>
  );
};

export default Router;
