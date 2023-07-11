import { TextField, Button, Container, Typography } from "@mui/material";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import cookie from "cookie";
import { Link } from "react-router-dom";
import axios from "axios";
// import { useMemo } from "react";
// import { createAvatar } from "@dicebear/core";
// import { adventurerNeutral } from "@dicebear/collection";

const Registration = () => {
  // const avatar = useMemo(() => {
  //   return createAvatar(adventurerNeutral, {
  //     size: 50,
  //     radius: 50,
  //     seed: "Sophie",
  //     backgroundColor: ["ffd5dc", "c0aede", "d1d4f9"],
  //     backgroundType: ["gradientLinear"],

  //     // ... other options
  //   }).toDataUriSync();
  // }, []);
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

  const register = (e) => {
    e.preventDefault();
    axios.post("http://localhost:4001/auth/signup", {
      username: state.username,
      password: state.password,
    });

    navigate("/login");
  };
  // const logout = () => {
  //   // localStorage.setItem();
  //   // setIsLoggedin(false);
  // };
  console.log(state);
  return (
    // <div>
    //   <Container maxWidth="sm">
    //     <form className="register-form">
    //       <TextField
    //         required
    //         name="username"
    //         label="Create a Unique Username"
    //         type="text"
    //         variant="standard"
    //       ></TextField>
    //       <TextField
    //         required
    //         name="password"
    //         label="Create a Secure Password"
    //         type="password"
    //         variant="standard"
    //       />
    //       <Button type="submit" variant="contained">
    //         Create Account
    //       </Button>
    //     </form>
    //     {/* User Avatar: <img src={avatar} alt="Avatar" /> */}
    //   </Container>
    // </div>
    <div>
      <Container maxWidth="sm">
        <form className="login-form" onSubmit={register}>
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
            className="registration-button"
            variant="contained"
          >
            Create an Account
          </Button>
        </form>
        <Typography style={{ textAlign: "center" }}>
          <br />
          <Link to="/login" style={{ color: "black" }}>
            Login
          </Link>
        </Typography>
      </Container>
    </div>
  );
};

export default Registration;
