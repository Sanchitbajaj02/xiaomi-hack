import { Grid } from "@mui/material";
import React, { useState } from "react";

const CustomerDetail = () => {
  const [customerData, setCustomerData] = useState({
    customerName: "",
    customerEmail: "",
    customerNumber: "",
    customerAddress: "",
    customerCity: "",
    customerState: "",
    customerZip: "",
  });
  const handleChange = (name, e) => {
    setCustomerData((prev) => {
      return {
        ...prev,
        [name]: e,
      };
    });
  };
  return (
    <div style={{ width: "100%", justifyContent: "center" }}>
      <Grid
        container
        spacing={0}
        direction="column"
        alignItems="center"
        style={{ maxWidth: "40vw" }}
      >
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="password">
            Customer Name
          </label>
          <input
            type="text"
            className="form-control "
            name="customerName"
            id="customerName"
            placeholder="Enter Name"
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="password">
            Customer Email
          </label>
          <input
            type="email"
            className="form-control "
            name="customerEmail"
            id="customerEmail"
            placeholder="Enter Email"
            onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="password">
            Customer Number
          </label>
          <input
            type="number"
            className="form-control "
            name="customerNumber"
            id="customerNumber"
            placeholder="Enter password"
            // onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control "
            name="password"
            id="password"
            placeholder="Enter password"
            // onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
        <div className="form-outline mb-3">
          <label className="form-label" htmlFor="password">
            Password
          </label>
          <input
            type="password"
            className="form-control "
            name="password"
            id="password"
            placeholder="Enter password"
            // onChange={(e) => handleChange("password", e.target.value)}
          />
        </div>
      </Grid>
    </div>
  );
};

export default CustomerDetail;
