import React from "react";
import { Route, Routes } from "react-router-dom";
import Dashboard from "./Pages/Dashboard";
import Order from "./Pages/Order";
import Login from "./Pages/Login";
import App from "./App";
import Products from "./Pages/Products";
import Menu from "./Components/Menu";
import ProductCategory from "./Pages/ProductCategory";
const Router = () => {
  return (
    <>
      <Menu />
      <Routes>
        <Route path="/" element={<App />} />
        {/* <Route index element={<Home />} /> */}
        {/* <Route path="teams" element={<Teams />}>
          <Route path=":teamId" element={<Team />} />
          <Route path="new" element={<NewTeamForm />} />
          <Route index element={<LeagueStandings />} />
        </Route> */}
        <Route path="dashboard" element={<Dashboard />} />
        <Route path="login" element={<Login />} />
        <Route path="order" element={<Order />} />
        <Route path="products" element={<Products />} />
        <Route
          exact
          path="/products/:productId"
          element={<ProductCategory />}
        />
      </Routes>
    </>
  );
};

export default Router;
