import React from "react";

import { Container, Button, Typography } from "@mui/material";

const Dashboard = () => {
  return (
    <Container maxWidth="lg" sx={{ marginTop: 5 }}>
      <Typography
        variant="h3"
        align="center"
        sx={{ paddingTop: 5, paddingBottom: 5 }}>
        Welcome to Vendor Dashboard
      </Typography>
      <div className="row ">
        <div className="col-md-3">
          <Button
            fullWidth
            size="large"
            variant={"outlined"}
            color="primary"
            href="/products"
            sx={{ marginBottom: 5 }}>
            Add product
          </Button>
          <Button
            fullWidth
            size="large"
            variant={"outlined"}
            color="primary"
            href="/products"
            sx={{ marginBottom: 5 }}>
            Manage orders
          </Button>
        </div>
        <div className="col-md-9">
          <Typography variant="h4">Recent Transactions</Typography>
          <table class="table table-bordered">
            <thead class="thead-dark">
              <tr>
                <th scope="col">Date</th>
                <th scope="col">Type</th>
                <th scope="col">Invoice No.</th>
                <th scope="col">Billing Name</th>
                <th scope="col">Amount</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <th scope="row">01/09/2022</th>
                <td>Sales Invoice</td>
                <td>MI/09/007</td>
                <td>ABC Group</td>
                <td>Rs 36980/-</td>
              </tr>
              <tr>
                <th scope="row">01/09/2022</th>
                <td>Sales Invoice</td>
                <td>MI/09/007</td>
                <td>ABC Group</td>
                <td>Rs 36980/-</td>
              </tr>
              <tr>
                <th scope="row">01/09/2022</th>
                <td>Sales Invoice</td>
                <td>MI/09/007</td>
                <td>ABC Group</td>
                <td>Rs 36980/-</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
    </Container>
  );
};

export default Dashboard;
