import React from "react";
import { Link, useLocation, useNavigate } from "react-router-dom";
import { isAutheticated, signout } from "../auth/index";
const currentTab = (history, path) => {
  if (history === path) {
    return {
      color: "#2ecc72",
    };
  } else {
    return {
      color: "#ffffff",
    };
  }
};
const Menu = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();
  const auth = isAutheticated();
  return (
    <div>
      <ul className="nav nav-tabs bg-dark">
        <li className="nav-item">
          <Link
            style={currentTab(pathname, "/dashboard")}
            className="nav-link"
            to="/dashboard"
          >
            Home
          </Link>
        </li>
        <li className="nav-item">
          <Link
            style={currentTab(pathname, "/cart")}
            className="nav-link"
            to="/cart"
          >
            Cart
          </Link>
        </li>
        {auth && auth.user.role === 0 && (
          <li className="nav-item">
            <Link
              style={currentTab(pathname, "/user/dashboard")}
              className="nav-link"
              to="/user/dashboard"
            >
              Dashboard
            </Link>
          </li>
        )}

        {auth && auth.user.role === 1 && (
          <li className="nav-item">
            <Link
              style={currentTab(pathname, "/admin/dashboard")}
              className="nav-link"
              to="/admin/dashboard"
            >
              Dashboard
            </Link>
          </li>
        )}

        {!isAutheticated() && (
          <>
            <li className="nav-item">
              <Link
                style={currentTab(pathname, "/signup")}
                className="nav-link"
                to="/signup"
              >
                Signup
              </Link>
            </li>
            <li className="nav-item">
              <Link
                style={currentTab(pathname, "/signin")}
                className="nav-link"
                to="/signin"
              >
                SignIn
              </Link>
            </li>
          </>
        )}
        {isAutheticated() && (
          <li className="nav-item">
            <span
              className="nav-link text-warning"
              onClick={() => {
                signout(() => {
                  navigate({ pathname: "/" });
                });
              }}
            >
              SignOut
            </span>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Menu;
