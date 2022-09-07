import React from "react";

const Dashboard = () => {
  return (
    <div className="container-fluid">
      <div className="row my-4">
        <div className="col-3">
          <div className="container">
            <a
              href="/products"
              class="btn btn-primary btn-lg btn-block"
              role="button"
              aria-pressed="true"
            >
              Products
            </a>
            <h1>Dashboard</h1>
          </div>
        </div>
        <div className="col-9">
          <div className="container">
            <h1 className="mb-3">Recent Transactions</h1>
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
      </div>
    </div>
  );
};

export default Dashboard;
