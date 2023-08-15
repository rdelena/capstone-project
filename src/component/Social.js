import React from "react";
import { AppBar, Container } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import { Link } from "react-router-dom";

const Social = () => {
  return (
    <AppBar position="relative" className="footer">
      <Container>
        <div className="social-icons">
          <Link to="https://github.com/rdelena">
            <GitHubIcon
              className="social-icon"
              fontSize="32px"
              style={{ color: "white" }}
            />
          </Link>
          <Link to="https://www.linkedin.com/in/rdelena/">
            <LinkedInIcon
              className="social-icon"
              fontSize="32px"
              style={{ color: "white" }}
            />
          </Link>
        </div>
      </Container>
    </AppBar>
  );
};

export default Social;
