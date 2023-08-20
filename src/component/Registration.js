import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";
import "../App.css";

const Registration = () => {
  const navigate = useNavigate();

  const [registerStatus, setRegisterStatus] = useState("");

  const [state, setState] = useState({
    username: "",
    password: "",
  });

  const handleTextChange = (e) => {
    const newLogin = { ...state };
    newLogin[e.target.name] = e.target.value;
    setState(newLogin);
  };

  const register = (e) => {
    e.preventDefault();
    axios
      .post("https://gaoryn-server.onrender.com/auth/signup", {
        username: state.username,
        password: state.password,
      })
      .then((res) => {
        console.log(res.data);
        navigate("/login");
      })
      .catch((err) => {
        console.log(err);
        setRegisterStatus("Username already exists");
      });
  };

  console.log(state);
  return (
    <div className="content">
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
          Registration
        </Typography>
        <form className="register-form" onSubmit={register}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Create a Unique Username"
            type="text"
            varient="standard"
            style={{ background: "white" }}
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Create a Secure Password"
            type="password"
            varient="standard"
            style={{ background: "white" }}
          />
          <Button
            type="submit"
            className="registration-button"
            variant="contained"
            sx={{
              fontFamily: "PressStart2P",
            }}
          >
            Create an Account
          </Button>
          {registerStatus && (
            <Typography color="error" style={{ textAlign: "center" }}>
              {registerStatus}
            </Typography>
          )}
        </form>
        <Typography
          variant="body2"
          color="textSecondary"
          style={{
            textAlign: "center",
            margin: "15px",
            marginBottom: "30px",
            fontFamily: "PressStart2P",
            color: "white",
          }}
        >
          For security purposes, kindly refrain from using personal names or
          critical passwords. This platform serves as a capstone project.
        </Typography>
        <Typography style={{ textAlign: "center", fontFamily: "PressStart2P" }}>
          Already have an Account?
        </Typography>
        <Typography style={{ textAlign: "center", fontFamily: "PressStart2P" }}>
          <Link
            to="/login"
            style={{ color: "blue", fontFamily: "PressStart2P" }}
          >
            Login
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Registration;
