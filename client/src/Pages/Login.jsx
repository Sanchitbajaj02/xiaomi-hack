import React, { useState } from "react";
import { Box, Container, Grid } from "@mui/material";

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
  return (
    <>
      <section
        style={{
          height: "80vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Container>
          <Grid container>
            <Grid item md={6} padding={2}>
              <img
                src="https://mdbcdn.b-cdn.net/img/Photos/new-templates/bootstrap-login-form/draw2.webp"
                class="img-fluid"
                alt="Sample"
              />
            </Grid>
            <Grid item md={6} padding={2}>
              <form method="post" onSubmit={handleSubmit}>
                <div class="form-outline mb-4">
                  <label class="form-label" for="form3Example3">
                    MI ID
                  </label>
                  <input
                    type="text"
                    name="miID"
                    class="form-control form-control-lg"
                    placeholder="Enter a valid email address"
                    maxLength={10}
                    onChange={handleChange}
                  />
                </div>

                <div class="form-outline mb-3">
                  <label class="form-label" for="form3Example4">
                    Password
                  </label>
                  <input
                    type="password"
                    class="form-control form-control-lg"
                    name="password"
                    placeholder="Enter password"
                    onChange={handleChange}
                  />
                </div>
                <div className="row">
                  <div className="col">
                    <label htmlFor="exampleInputEmail1">Store type</label>
                    <br />
                    <div className="form-check form-check-inline">
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio1">
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
                      <label
                        className="form-check-label"
                        htmlFor="inlineRadio2">
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
            </Grid>
          </Grid>
        </Container>
      </section>
    </>
  );
};

export default Login;
