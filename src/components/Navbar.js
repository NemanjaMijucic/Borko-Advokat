import React, { useState } from "react";
import { styled, Toolbar, Typography, Button } from "@mui/material";
import Box from "@mui/material/Box";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  const [error, setError] = useState();

  return (
    <StyledToolbar sx={{ backgroundColor: "#ddd", width: "auto" }}>
      <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
        Advokatska kancelarija Borko
      </Typography>
      <Box>
        <Button to="/" sx={{ marginRight: 2 }}>
          Home
        </Button>
        <Button to="/about" sx={{ marginRight: 2 }}>
          About
        </Button>
        <Button to="/services" sx={{ marginRight: 2 }}>
          Services
        </Button>
      </Box>
      {error && (
        <Typography variant="h6" sx={{ display: { xs: "none", sm: "block" } }}>
          {error}
        </Typography>
      )}
    </StyledToolbar>
  );
};

export default Navbar;
