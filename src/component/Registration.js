import React from "react";
import { TextField, Button, Container } from "@mui/material";
import { useMemo } from "react";
import { createAvatar } from "@dicebear/core";
import { adventurerNeutral } from "@dicebear/collection";

const Registration = () => {
  const avatar = useMemo(() => {
    return createAvatar(adventurerNeutral, {
      size: 50,
      radius: 50,
      seed: "Sophie",
      backgroundColor: ["ffd5dc", "c0aede", "d1d4f9"],
      backgroundType: ["gradientLinear"],

      // ... other options
    }).toDataUriSync();
  }, []);
  return (
    <div>
      <Container maxWidth="sm">
        <form className="register-form">
          <TextField
            required
            name="username"
            label="Create a Unique Username"
            type="text"
            variant="standard"
          ></TextField>
          <TextField
            required
            name="password"
            label="Create a Secure Password"
            type="password"
            variant="standard"
          />
          <Button type="submit" variant="contained">
            Sign Up
          </Button>
        </form>
        User Avatar: <img src={avatar} alt="Avatar" />
      </Container>
    </div>
  );
};

export default Registration;
