import React, { useState, useEffect } from "react";
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
import axios from "axios";

const Navigation = () => {
  const navigate = useNavigate();
  const storedUsername = localStorage.getItem("username");
  const [avatar, setAvatar] = useState("");

  useEffect(() => {
    const fetchAvatar = async () => {
      try {
        const response = await axios.get(
          `https://robohash.org/${storedUsername}`
        );
        setAvatar(response.config.url);
      } catch (error) {
        console.error("Error fetching avatar:", error);
      }
    };

    if (storedUsername) {
      fetchAvatar();
    }
  }, [storedUsername]);

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
          {avatar && (
            <img
              src={avatar}
              alt="avatar"
              style={{ height: "50px", width: "50px", borderRadius: "50%" }}
            />
          )}
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
              <h3 className="PressStart2P" style={{ textAlign: "center" }}>
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
              // If the user is logged in, show the Home and Logout options
              <>
                <MenuItem>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={handleMenuClose}
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </>
            ) : (
              // If the user is not logged in, show the Home, Login, and Register options
              <>
                <MenuItem>
                  <Link
                    to="/"
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={handleMenuClose}
                  >
                    Home
                  </Link>
                </MenuItem>
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