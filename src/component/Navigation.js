import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";
import Image3 from "../img/rdelena-logos_white(edit).png";
import { useNavigate } from "react-router-dom";
import cookie from "cookie";

const Navigation = () => {
  const navigate = useNavigate();
  const logout = () => {
    document.cookie = cookie.serialize("loggedIn", null, {
      maxAge: 0,
    });
    navigate("/login");
  };

  return (
    <AppBar position="relative" className="navBar">
      <Container>
        <Toolbar>
          <img
            src={Image3}
            style={{ height: "52px", width: "100px" }}
            alt="logo"
          />
          <Typography variant="h6" style={{ flexGrow: "1", color: "white" }}>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              <h3 style={{ textAlign: "center" }}>
                Capstone Project: Epics of Gaoryn
              </h3>
            </Link>
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link to="/" style={{ textDecoration: "none", color: "white" }}>
                Home
              </Link>
            </li>
            <li className="nav-list-item">
              <Link
                to="/login"
                style={{ textDecoration: "none", color: "white" }}
              >
                Login
              </Link>
            </li>
            <li className="nav-list-item">
              <Link
                to="/register"
                style={{ textDecoration: "none", color: "white" }}
              >
                Register
              </Link>
            </li>
            <li
              className="nav-list-item"
              onClick={logout}
              style={{ cursor: "pointer" }}
            >
              Log Out
            </li>
          </ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
