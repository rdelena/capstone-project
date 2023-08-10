import React from "react";
import { AppBar, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Social = () => {
  return (
    <AppBar position="relative" className="footer">
      <Container>
        <div className="social-icons">
          <GitHubIcon className="social-icon" fontSize="32px" />
          <LinkedInIcon className="social-icon" fontSize="32px" />
        </div>
      </Container>
    </AppBar>
  );
};

export default Social;
