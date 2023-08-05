import React, { useState } from "react";
import {
  AppBar,
  Toolbar,
  Typography,
  Container,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import cookie from "cookie";
import MenuIcon from "@mui/icons-material/Menu";

const Navigation = () => {
  const navigate = useNavigate();
  const storedUsername = localStorage.getItem("username");

  const logout = () => {
    document.cookie = cookie.serialize("loggedIn", null, {
      maxAge: 0,
    });
    document.cookie = cookie.serialize("token", null, {
      maxAge: 0,
    });
    localStorage.clear();
    navigate("/login");
  };

  const [menuAnchorEl, setMenuAnchorEl] = useState(null);

  const handleMenuOpen = (event) => {
    setMenuAnchorEl(event.currentTarget);
  };
  const handleMenuClose = () => {
    setMenuAnchorEl(null);
  };

  return (
    <AppBar position="relative" className="navBar">
      <Container>
        <Toolbar>
          {storedUsername && (
            <Typography
              variant="h6"
              style={{ flexGrow: "1", color: "white" }}
            >
              {storedUsername}
            </Typography>
          )}
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
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            {storedUsername ? (
              <MenuItem onClick={logout}>Logout</MenuItem>
            ) : (
              <>
                <MenuItem>
                  <Link
                    to="/login"
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={handleMenuClose}
                  >
                    Login
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/register"
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={handleMenuClose}
                  >
                    Register
                  </Link>
                </MenuItem>
              </>
            )}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;