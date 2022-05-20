import { useContext } from "react";
import AuthContext from "../context/AuthProvider";
import React from "react";
import { NavLink, useNavigate, useLocation } from "react-router-dom";
import { OverlayTrigger, Tooltip } from "react-bootstrap";
import DataContext from "../context/DataProvider";
import UserContext from "../context/UserProvider";
import useLogout from "../hooks/useLogout";
import "../styles/navbar.css";

const menuItems = [
  {
    name: "Home",
    path: "/",
    description: "Landing Page",
  },
  {
    name: "Create Account",
    path: "createaccount",
    description: "Register New BadBank Account",
  },
  {
    name: "Dashboard",
    path: "dashboard",
    description: "Transaction Data ",
  },
  {
    name: "Deposit",
    path: "deposit",
    description: "Deposit Transactions",
  },
  {
    name: "Withdraw",
    path: "withdraw",
    description: "Withdrawal Transactions",
  },
  {
    name: "All Data",
    path: "alldata",
    description: "User Account Information",
  },
  {
    name: "Login",
    path: "/login",
    description: "Login Page",
  },
  // {
  //   name: "Logout",
  //   path: "logout",
  //   description: "Logout Page",
  // },
  {
    name: "Directory",
    path: "directory",
    description: "Directory Page ",
  },
  // {
  //   name: "Log Out",
  //   path: "unauthorized",
  //   description: "Log Out",
  // },
  // {
  //   name: "Editor",
  //   path: "editor",
  //   description: "Editors Page",
  // },
  // {
  //   name: "Admin",
  //   path: "admin",
  //   description: "Admin Page",
  // },
  // {
  //   name: "Lounge",
  //   path: "lounge",
  //   description: "Lounge Page",
  // }
];

function NavBar() {
  const { accountData, setAccountData } = useContext(DataContext);
  const { userData, setUserData } = useContext(UserContext);
  const { setAuth } = useContext(AuthContext);
  const location = useLocation();
  const navigate = useNavigate();
  const logout = useLogout();

  const signOut = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <>
      <nav
        className="navbar navbar-expand-lg navbar-dark bg-dark"
        style={{ marginBottom: "1rem", padding: "1rem" }}
      >
        <div className="container-fluid ms-5">
          <NavLink to="/" className="navbar-brand fs-1 fw-bold logo">
            <span className="logocolor">B</span>ad
            <span className="logocolor2">B</span>ank
          </NavLink>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end me-5"
            id="navbarNav"
          >
            <div className="navbar-nav nav-pills">
              {menuItems.map((item, index) => (
                // <OverlayTrigger
                //   key={index}
                //   placement="bottom"
                //   overlay={<Tooltip>{item.description}</Tooltip>}
                // >
                <NavLink
                  key={index}
                  to={item.path}
                  className={({ isActive }) =>
                    isActive
                      ? "nav-link fs-6 mx-3 active"
                      : "nav-link fs-6 mx-3"
                  }
                >
                  {item.name}
                </NavLink>
                // </OverlayTrigger>
              ))}
            </div>
            <NavLink
              to="/login"
              onClick={signOut}
              className="nav-link fs-6 mx-3"
              style={{ color: "white" }}
            >
              Logout
            </NavLink>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
