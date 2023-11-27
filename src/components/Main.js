import React, { useState, useEffect } from "react";
import {
  Avatar,
  Typography,
  Box,
  Paper,
  Grid,
  TextField,
  Button,
} from "@mui/material";

const Main = () => {
  const [showContactForm, setShowContactForm] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowContactForm(true);
      } else {
        setShowContactForm(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box mt={4}>
      <Grid container justifyContent="center">
        <Grid item xs={12} md={6}>
          <Paper
            elevation={3}
            style={{
              padding: "20px",
              backgroundColor: "#f5f5f5",
              position: "relative",
            }}
          >
            <Avatar sx={{ width: 100, height: 100, margin: "0 auto" }}></Avatar>
            <Typography variant="h5" align="center" mt={2}>
              Borko Advokat
            </Typography>
            <Typography variant="body1" align="center">
              Lawyer at Law Firm XYZ
            </Typography>
            <Typography variant="body2" align="center" mt={2}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce
              pulvinar arcu eget tincidunt porttitor. Etiam nec massa nec mauris
              accumsan vulputate sit amet eu velit.
            </Typography>
            <Box mt={2}>
              <Typography variant="subtitle1">Contact Information</Typography>
              <Typography variant="body2">
                Email: borko.advokat@gmail.com
              </Typography>
              <Typography variant="body2">Phone: (123) 456-7890</Typography>
              <Typography variant="body2">Address: 123 Main St</Typography>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
