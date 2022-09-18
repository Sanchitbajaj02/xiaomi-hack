import React, { useState, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { Container, Grid } from "@mui/material";
import { StoreContext } from "../Utils/StoreContext";
import { operatorLogin } from "../Utils/apiBuilder";

const Login = () => {
  const { store, setStore } = useContext(StoreContext);
  const navigate = useNavigate();
  console.log(store);

  const [activeTab, setActiveTab] = useState("MI HOME");
  const [loginData, setLoginData] = useState({
    miID: "",
    password: "",
    storeType: activeTab,
    pos: "",
  });

  const handleChange = (name, e) => {
    setLoginData((prev) => {
      return {
        ...prev,
        [name]: e,
      };
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    operatorLogin(loginData)
      .then((res) => {
        console.log(res.data);
        alert("Login Successful");

        const { miID, pos, storeType } = res.data.result;

        sessionStorage.setItem("miID", miID);
        sessionStorage.setItem("pos", pos);
        sessionStorage.setItem("storeType", storeType);
        sessionStorage.setItem("token", res.data.token);

        setStore((prev) => {
          return {
            ...prev,
            user: {
              miID,
              pos,
              storeType,
              token: res.data.token,
            },
          };
        });

        navigate("/dashboard");
      })
      .catch((err) => console.log(err));
  };
  console.log(loginData);
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
                className="img-fluid"
                alt="Sample"
              />
            </Grid>
            <Grid item md={6} padding={2}>
              <form method="post" onSubmit={handleSubmit}>
                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="miID">
                    MI ID
                  </label>
                  <input
                    type="number"
                    name="miID"
                    id="miID"
                    className="form-control "
                    placeholder="Enter a valid email address"
                    maxLength={10}
                    onChange={(e) => handleChange("miID", e.target.value)}
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
                    onChange={(e) => handleChange("password", e.target.value)}
                  />
                </div>

                <div className="form-outline mb-3">
                  <label htmlFor="storeType" className="d-block pb-3">
                    Store type
                  </label>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="storeType"
                      id="miHome"
                      value="MI HOME"
                      onChange={(e) => {
                        setActiveTab(e.target.value);
                        handleChange("storeType", e.target.value);
                      }}
                      checked={activeTab === "MI HOME"}
                    />
                    <label className="form-check-label" htmlFor="miHome">
                      MI Home
                    </label>
                  </div>
                  <div className="form-check">
                    <input
                      className="form-check-input"
                      type="radio"
                      name="storeType"
                      id="miStore"
                      value="MI STORE"
                      onChange={(e) => {
                        setActiveTab(e.target.value);
                        handleChange("storeType", e.target.value);
                      }}
                      checked={activeTab === "MI STORE"}
                    />
                    <label className="form-check-label" htmlFor="miStore">
                      MI Store
                    </label>
                  </div>
                </div>

                <div className="form-outline mb-3">
                  <label className="form-label" htmlFor="pos">
                    Point of Sales (POS) ID
                  </label>
                  <input
                    type="number"
                    name="pos"
                    id="pos"
                    className="form-control "
                    placeholder="Point of sales"
                    onChange={(e) => handleChange("pos", e.target.value)}
                  />
                </div>

                <div className="form-outline mb-3">
                  <button type="submit" className="btn btn-black btn-lg w-100">
                    Login
                  </button>
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
