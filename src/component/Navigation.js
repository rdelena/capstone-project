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
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography
            variant="h6"
            style={{
              flexGrow: "1",
              color: "white",
              fontFamily: "PressStart2P",
            }}
          >
            <div
              style={{
                textAlign: "center",
                fontFamily: "PressStart2P",
                color: "white",
              }}
            >
              Capstone Project: Epics of Gaoryn
            </div>
          </Typography>
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
              style={{
                flexGrow: "1",
                color: "white",
                fontFamily: "PressStart2P",
              }}
            >
              {storedUsername}
            </Typography>
          )}
          <IconButton
            edge="end"
            color="inherit"
            aria-label="menu"
            onClick={handleMenuOpen}
            style={{ marginLeft: "auto" }}
          >
            <MenuIcon />
          </IconButton>
          <Menu
            anchorEl={menuAnchorEl}
            open={Boolean(menuAnchorEl)}
            onClose={handleMenuClose}
          >
            {storedUsername ? (
              <div>
                <MenuItem>
                  <Link
                    to="/"
                    style={{
                      textDecoration: "none",
                      color: "inherit",
                    }}
                    onClick={handleMenuClose}
                  >
                    Home
                  </Link>
                </MenuItem>
                <MenuItem>
                  <Link
                    to="/dashboard"
                    style={{ textDecoration: "none", color: "inherit" }}
                    onClick={handleMenuClose}
                  >
                    Dashboard
                  </Link>
                </MenuItem>
                <MenuItem onClick={logout}>Logout</MenuItem>
              </div>
            ) : (
              <div>
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
              </div>
            )}
          </Menu>
        </Toolbar>
      </Container>
    </AppBar>
  );
};

export default Navigation;
