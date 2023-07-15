import React from "react";
import { AppBar, Container, Stack } from "@mui/material";
import GitHubIcon from "@mui/icons-material/GitHub";
import LinkedInIcon from "@mui/icons-material/LinkedIn";

const Social = () => {
  return (
    <AppBar position="relative">
      <Container>
        <Stack direction="row" alignItems="center" spacing={5}>
          <GitHubIcon sx={{ fontSize: 30 }} />
          <LinkedInIcon sx={{ fontSize: 30 }} />
        </Stack>
      </Container>
    </AppBar>
  );
};

export default Social;
