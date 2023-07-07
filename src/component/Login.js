import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";
import cookie from "cookie";
import { Link } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const { name, value } = e.target;
    setState((prevState) => {
      return {
        ...prevState,
        [name]: value,
      };
    });
  };

  const login = (e) => {
    e.preventDefault();
    document.cookie = cookie.serialize("loggedIn", "true", {
      maxAge: 60,
    });

    navigate("/");
  };

  return (
    <div>
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={login}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Username"
            type="text"
            color="success"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Password"
            type="password"
            color="success"
          />
          <Button
            type="submit"
            className="login-button"
            variant="contained"
            color="success"
          >
            Login
          </Button>
        </form>
        <Typography style={{ textAlign: "center" }}>
          Need an Account?
          <br />
          <Link to="/register" style={{ color: "black" }}>
            Sign Up
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Login;
