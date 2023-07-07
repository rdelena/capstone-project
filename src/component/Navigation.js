import React from "react";
import { AppBar, Toolbar, Typography, Container } from "@mui/material";
import { Link } from "react-router-dom";

const Navigation = () => {
  return (
    <AppBar position="relative" className="navBar">
      <Container>
        <Toolbar>
          <Typography variant="h6" style={{ flexGrow: "1", color: "white" }}>
            <Link
              to="/dashboard"
              style={{ textDecoration: "none", color: "white" }}
            >
              Capstone Project: Epics of Gaoryn
            </Link>
          </Typography>
          <ul className="nav-list">
            <li className="nav-list-item">
              <Link
                to="/dashboard"
                style={{ textDecoration: "none", color: "white" }}
              >
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
          </ul>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
