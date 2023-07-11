import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";
import cookie from "cookie";
import { Link } from "react-router-dom";
import axios from "axios";

const Login = () => {
  // const [loggedIn, setIsLoggedin] = useState(
  //   localStorage.access ? true : false
  // );
  const navigate = useNavigate();

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const newLogin = { ...state };
    newLogin[e.target.name] = e.target.value;
    setState(newLogin);
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("http://localhost:4001/auth/login", {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        console.log(res);
        document.cookie = cookie.serialize("loggedIn", "true", {
          maxAge: 6000,
        });
        document.cookie = cookie.serialize("token", res.data.token);
      })
      .catch((err) => {
        console.log(err);
      });

    navigate("/dashboard");
  };
  // const logout = () => {
  //   // localStorage.setItem();
  //   // setIsLoggedin(false);
  // };
  console.log(state);
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
