import React, { useState } from "react";
import { useNavigate, Link } from "react-router-dom";
import { TextField, Button, Container, Typography } from "@mui/material";
import cookie from "cookie";
import axios from "axios";

const Login = () => {
  const navigate = useNavigate();
  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const [loginStatus, setLoginStatus] = useState("");

  const handleTextChange = (e) => {
    const newLogin = { ...state };
    newLogin[e.target.name] = e.target.value;
    setState(newLogin);
  };

  const login = (e) => {
    e.preventDefault();
    axios
      .post("https://gaoryn-server.onrender.com/auth/login", {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        console.log(res.data);
        document.cookie = cookie.serialize("loggedIn", "true", {
          maxAge: 18000,
        });
        document.cookie = cookie.serialize("token", res.data.token, {
          maxAge: 18000,
        });
        const { username } = res.data;
        localStorage.setItem("username", username);
        axios
          .get(`https://gaoryn-server.onrender.com/users/${username}`)
          .then((response) => {
            const userID = response.data.id;
            localStorage.setItem("userID", userID);
            navigate("/dashboard");
          })
          .catch((error) => {
            console.error("Error retrieving user ID:", error);
          });
      })
      .catch((err) => {
        console.log(err);
        setLoginStatus("Wrong Username or Password");
      });
  };

  return (
    <div>
      <Container maxWidth="sm">
        <Typography
          variant="h5"
          component="h5"
          sx={{
            textAlign: "center",
            marginTop: "20px",
            fontFamily: "PressStart2P",
          }}
        >
          Game Login
        </Typography>
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
            sx={{
              fontFamily: "PressStart2P",
            }}
          >
            Login
          </Button>
          {loginStatus && (
            <Typography
              color="error"
              style={{ textAlign: "center", fontFamily: "PressStart2P" }}
            >
              {loginStatus}
            </Typography>
          )}
        </form>
        <Typography style={{ textAlign: "center", fontFamily: "PressStart2P" }}>
          Need an Account?
          <br />
          <Link
            to="/register"
            style={{ color: "green", fontFamily: "PressStart2P" }}
          >
            Sign Up
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Login;
