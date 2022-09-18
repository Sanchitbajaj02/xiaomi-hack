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
import CustomerDetail from "./Pages/CustomerDetail";

const Router = () => {
  const miIDSession = sessionStorage.getItem("miID");
  const posSession = sessionStorage.getItem("pos");
  const storeTypeSession = sessionStorage.getItem("storeType");
  const tokenSession = sessionStorage.getItem("token");

  const [store, setStore] = useState({
    products: [],
    cart: [],
    user: {
      miID: miIDSession || "",
      pos: posSession || "",
      storeType: storeTypeSession || "",
      token: tokenSession || "",
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
<<<<<<< Updated upstream
          <Route path="/product/:productId" element={<ProductCategory />} />
          <Route path="/customerdetail" element={<CustomerDetail />} />
=======
          <Route path="/product/:productID" element={<ProductCategory />} />
>>>>>>> Stashed changes
        </Routes>
        <Footer />
      </StoreContext.Provider>
    </>
  );
};

export default Router;
