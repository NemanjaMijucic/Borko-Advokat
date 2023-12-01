import React, { useState } from "react";
import {
  styled,
  Toolbar,
  Typography,
  Button,
  Avatar,
  Menu,
  MenuItem,
} from "@mui/material";
import Box from "@mui/material/Box";
import MenuIcon from "@mui/icons-material/Menu";

import Background from "./Background";
import { Link } from "react-router-dom";

const StyledToolbar = styled(Toolbar)({
  display: "flex",
  justifyContent: "space-between",
});

const Navbar = () => {
  const [anchorEl, setAnchorEl] = React.useState(null);
  const open = Boolean(anchorEl);
  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <StyledToolbar sx={{ backgroundColor: "#012a4a", width: "auto" }}>
      <Avatar sx={{ width: 50, height: 50, margin: "10px" }}>
        <Background></Background>
      </Avatar>
      <Typography
        variant="h6"
        sx={{ display: { xs: "none", sm: "block" }, color: "#fff" }}
      >
        Advokatska kancelarija Borko
      </Typography>

      <Box sx={{ display: { xs: "none", sm: "block" } }}>
        <Button to="/" sx={{ marginRight: 2 }}>
          Home
        </Button>
        <Button to="/about" sx={{ marginRight: 2 }}>
          About
        </Button>
        <Button to="/services" sx={{ marginRight: 2 }}>
          Contact
        </Button>
      </Box>

      {/* Mobile View */}
      <Box sx={{ display: { xs: "block", sm: "none" } }}>
        <Button onClick={handleClick} sx={{ color: "#fff" }}>
          <MenuIcon />
        </Button>
        <Menu
          id="demo-positioned-menu"
          aria-labelledby="demo-positioned-button"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          anchorOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
          transformOrigin={{
            vertical: "top",
            horizontal: "left",
          }}
        >
          <MenuItem onClick={handleClose}>Home</MenuItem>
          <MenuItem onClick={handleClose}>About</MenuItem>
          <MenuItem onClick={handleClose}>Contact</MenuItem>
        </Menu>
      </Box>
    </StyledToolbar>
  );
};

export default Navbar;
