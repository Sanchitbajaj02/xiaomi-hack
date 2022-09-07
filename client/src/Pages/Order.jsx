import React from "react";

const Order = () => {
  const handleChange = (e) => {
    const { name, value } = e.target;
    console.log(name, value);
  };
  return (
    <>
      <div className="container">
        <div className="row my-4">
          <div className="col-md-4">
            <label htmlFor="exampleInputEmail1">Enter Store Name</label>
            <input
              type="text"
              className="form-control"
              placeholder="Store name"
              name="first-name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="exampleInputEmail1">Point of sales ID (POS)</label>
            <input
              type="text"
              className="form-control"
              placeholder="Point of sales"
              name="last-name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-4">
            <label htmlFor="exampleInputEmail1">Select the category</label>
            <input
              type="text"
              className="form-control"
              placeholder="Category"
              name="first-name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-4">
            <label htmlFor="exampleInputEmail1">Model Number</label>
            <input
              type="text"
              className="form-control"
              placeholder="Model number"
              name="last-name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="exampleInputEmail1">Delivery Mode</label>
            <br />
            <div className="form-check form-check-inline">
              <label className="form-check-label" htmlFor="inlineRadio1">
                Take Away
              </label>
              <input
                className="form-check-input"
                type="radio"
                id="inlineRadio1"
                value="take-away"
                name="full-part"
                onChange={handleChange}
              />
            </div>
            <div className="form-check form-check-inline">
              <input
                className="form-check-input"
                type="radio"
                id="inlineRadio2"
                value="home-delivery"
                name="full-part"
                onChange={handleChange}
              />
              <label className="form-check-label" htmlFor="inlineRadio2">
                Home Delivery
              </label>
            </div>
          </div>
        </div>
        <h3>Product Description</h3>
        <h3>Product Specifications</h3>
        <div className="row my-4">
          <div className="col-md-2">
            <label htmlFor="exampleInputEmail1">Color</label>
            <input
              type="text"
              className="form-control"
              placeholder="Color"
              name="first-name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="exampleInputEmail1">Size</label>
            <input
              type="text"
              className="form-control"
              placeholder="Size"
              name="last-name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="exampleInputEmail1">Variant</label>
            <input
              type="text"
              className="form-control"
              placeholder="Variant"
              name="first-name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="exampleInputEmail1">Quantity</label>
            <input
              type="text"
              className="form-control"
              placeholder="Quantity"
              name="last-name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-2">
            <label htmlFor="exampleInputEmail1">Serial Number(SN)</label>
            <input
              type="text"
              className="form-control"
              placeholder="Serial Number"
              name="last-name"
              onChange={handleChange}
            />
          </div>
        </div>
        <h3>Billing Address</h3>
        <div className="row my-4">
          <div className="col-md-3">
            <label htmlFor="exampleInputEmail1">House No.</label>
            <input
              type="text"
              className="form-control"
              placeholder="House no."
              name="first-name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="exampleInputEmail1">Street / Sector</label>
            <input
              type="text"
              className="form-control"
              placeholder="Street/Sector"
              name="first-name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="exampleInputEmail1">Landmark</label>
            <input
              type="text"
              className="form-control"
              placeholder="Landmark"
              name="last-name"
              onChange={handleChange}
            />
          </div>
        </div>
        <div className="row my-4">
          <div className="col-md-3">
            <label htmlFor="exampleInputEmail1">Pincode</label>
            <input
              type="text"
              className="form-control"
              placeholder="Pincode"
              name="first-name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="exampleInputEmail1">State</label>
            <input
              type="text"
              className="form-control"
              placeholder="State"
              name="first-name"
              onChange={handleChange}
            />
          </div>
          <div className="col-md-3">
            <label htmlFor="exampleInputEmail1">District</label>
            <input
              type="text"
              className="form-control"
              placeholder="District"
              name="last-name"
              onChange={handleChange}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Order;
