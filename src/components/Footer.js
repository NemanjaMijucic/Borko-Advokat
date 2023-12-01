import { Box, Typography } from "@mui/material";
import React from "react";

const Footer = () => {
  return (
    <Box
      sx={{
        backgroundColor: "#ddd",
        padding: "10px",
        marginTop: "20px",
        textAlign: "center",
      }}
    >
      <Typography>copyright NemanjaMijucic</Typography>
    </Box>
  );
};

export default Footer;
