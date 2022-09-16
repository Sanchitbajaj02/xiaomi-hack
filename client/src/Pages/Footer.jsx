import React from "react";

import { Box } from "@mui/material";

const Footer = () => {
  return (
    <Box
      sx={{
        position: "fixed",
        bottom: 0,
        width: "100%",
        height: "50px",
        backgroundColor: "primary.main",
        color: "white",
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}>
      <div>Copyright © 2022. All rights reserved.</div>
    </Box>
  );
};

export default Footer;
