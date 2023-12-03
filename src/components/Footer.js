import React from "react";
import {
  Typography,
  Box,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";

const Footer = () => {
  return (
    <>
      <Grid>
        <Grid item xs={12} md={12}>
          <Box
            sx={{
              backgroundColor: "#012a4a",
              color: "#fff",
              textAlign: "center",
              margin: "0 auto",
            }}
          >
            <List>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#fff" }}>
                    <PhoneIphoneIcon />
                  </ListItemIcon>
                  <ListItemText primary="064/123-4567" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#fff" }}>
                    <EmailIcon />
                  </ListItemIcon>
                  <ListItemText primary="borko.advokat@gmail.com" />
                </ListItemButton>
              </ListItem>
              <ListItem disablePadding>
                <ListItemButton>
                  <ListItemIcon sx={{ color: "#fff" }}>
                    <HomeIcon />
                  </ListItemIcon>
                  <ListItemText primary="123 Main street" />
                </ListItemButton>
              </ListItem>
            </List>
          </Box>
        </Grid>
      </Grid>
      <Box
        sx={{
          backgroundColor: "#012a4a",
          padding: "10px",
          textAlign: "center",
        }}
      >
        <Typography>copyright NemanjaMijucic</Typography>
      </Box>
    </>
  );
};

export default Footer;
