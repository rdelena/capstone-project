import React, { useState } from "react";
import { TextField, Button, Container, Typography } from "@mui/material";
import { useNavigate, Link } from "react-router-dom";
import axios from "axios";

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
      .post("http://localhost:4001/auth/signup", {
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
    <div>
      <Container maxWidth="sm">
        <form className="register-form" onSubmit={register}>
          <TextField
            required
            onChange={handleTextChange}
            value={state.username}
            name="username"
            label="Create a Unique Username"
            type="text"
            varient="standard"
          />
          <TextField
            required
            onChange={handleTextChange}
            value={state.password}
            name="password"
            label="Create a Secure Password"
            type="password"
            varient="standard"
          />
          <Button
            type="submit"
            className="registration-button"
            variant="contained"
          >
            Create an Account
          </Button>
          {registerStatus && (
            <Typography color="error" style={{ textAlign: "center" }}>
              {registerStatus}
            </Typography>
          )}
        </form>
        <Typography style={{ textAlign: "center" }}>
          Already have an Account?
        </Typography>
        <Typography style={{ textAlign: "center" }}>
          <Link to="/login" style={{ color: "black" }}>
            Login
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Registration;
