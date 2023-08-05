import React from "react";
import { AppBar, Container, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Social = () => {
  return (
    <AppBar position="relative" className="footer">
      <Container>
        <div className="social-icons"> {/* Add the social-icons class */}
          <GitHubIcon className="social-icon" /> {/* Add the social-icon class */}
          <LinkedInIcon className="social-icon" /> {/* Add the social-icon class */}
        </div>
      </Container>
    </AppBar>
  );
};

export default Social;
