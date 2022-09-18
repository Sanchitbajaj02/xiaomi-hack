import React, { useState } from "react";
import { Route, Routes } from "react-router-dom";
import { StoreContext } from "./Utils/StoreContext";

import Dashboard from "./Pages/Dashboard";
import Order from "./Pages/Order";
import Login from "./Pages/Login";
import Products from "./Pages/Products";
import Navbar from "./Components/Navbar";
import ProductCategory from "./Pages/ProductCategory";

import Footer from "./Pages/Footer";

const Router = () => {
  // const authSession = sessionStorage.getItem("auth");

  const [store, setStore] = useState({
    products: [],
    cart: [],
    user: {
      // miID: authSession.miID || "",
      // pos: authSession.pos || "",
      // storeType: authSession.storeType || "",
      // token: authSession.token || "",
    },
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
          <Route path="/product/:productId" element={<ProductCategory />} />
        </Routes>
        <Footer />
      </StoreContext.Provider>
    </>
  );
};

export default Router;
