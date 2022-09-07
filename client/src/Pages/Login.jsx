import React, { useState } from "react";

const Login = () => {
  const [loginData, setLoginData] = useState({
    miID: "",
    password: "",
    storeType: "",
    pos: "",
  });
  const handleChange = (e) => {
    setLoginData((prev) => {
      return {
        ...prev,
        [e.target.name]: e.target.value,
      };
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  console.log(loginData);
  return (
    <section class="vh-100">
      <div class="container-fluid h-custom">
        <div class="row d-flex justify-content-center align-items-center h-100">
          <div class="col-md-9 col-lg-6 col-xl-5">
            <img
              src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
              class="img-fluid"
              alt="Sample"
            />
          </div>
          <div class="col-md-8 col-lg-6 col-xl-4 offset-xl-1">
            <form method="post" onSubmit={handleSubmit}>
              <div class="form-outline mb-4">
                <input
                  type="text"
                  name="miID"
                  class="form-control form-control-lg"
                  placeholder="Enter a valid email address"
                  maxLength={10}
                  onChange={handleChange}
                />
                <label class="form-label" for="form3Example3">
                  MI ID
                </label>
              </div>

              <div class="form-outline mb-3">
                <input
                  type="password"
                  class="form-control form-control-lg"
                  name="password"
                  placeholder="Enter password"
                  onChange={handleChange}
                />
                <label class="form-label" for="form3Example4">
                  Password
                </label>
              </div>
              <div className="row">
                <div className="col">
                  <label htmlFor="exampleInputEmail1">Store type</label>
                  <br />
                  <div className="form-check form-check-inline">
                    <label className="form-check-label" htmlFor="inlineRadio1">
                      MI HOME
                    </label>
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineRadio1"
                      value="miHome"
                      name="storeType"
                      onChange={handleChange}
                    />
                  </div>
                  <div className="form-check form-check-inline">
                    <input
                      className="form-check-input"
                      type="radio"
                      id="inlineRadio2"
                      value="miStore"
                      name="storeType"
                      onChange={handleChange}
                    />
                    <label className="form-check-label" htmlFor="inlineRadio2">
                      MI STORE
                    </label>
                  </div>
                </div>
              </div>
              <div class="form-outline mb-3 mt-3">
                <input
                  type="text"
                  name="pos"
                  id="form3Example4"
                  class="form-control form-control-lg"
                  placeholder="Point of sales"
                  onChange={handleChange}
                />
                <label class="form-label" for="form3Example4">
                  Point Of Sales (POS)
                </label>
              </div>

              <div class="text-center text-lg-start mt-4 pt-2">
                <button
                  type="button"
                  class="btn btn-primary btn-lg"
                  // style="padding-left: 2.5rem; padding-right: 2.5rem;"
                >
                  Login
                </button>
                <p class="small fw-bold mt-2 pt-1 mb-0">
                  Don't have an account?{" "}
                  <a href="#!" class="link-danger">
                    Register
                  </a>
                </p>
              </div>
            </form>
          </div>
        </div>
      </div>
      <div class="d-flex flex-column flex-md-row text-center text-md-start justify-content-between py-4 px-4 px-xl-5 bg-primary">
        <div class="text-white mb-3 mb-md-0">
          Copyright © 2020. All rights reserved.
        </div>
        <div>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-facebook-f"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-twitter"></i>
          </a>
          <a href="#!" class="text-white me-4">
            <i class="fab fa-google"></i>
          </a>
          <a href="#!" class="text-white">
            <i class="fab fa-linkedin-in"></i>
          </a>
        </div>
      </div>
    </section>
  );
};

export default Login;
