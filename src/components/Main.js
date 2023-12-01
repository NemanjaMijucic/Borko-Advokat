import React, { useState, useEffect } from "react";
import { Avatar, Typography, Box, Paper, Grid } from "@mui/material";
import Contact from "./Contact";
import Background from "./Background";

const Main = () => {
  const [showContactForm, setShowContactForm] = useState(false);
  const [showAbout, setShowAbout] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 100) {
        setShowAbout(true);
      } else {
        setShowAbout(false);
      }

      if (window.scrollY > 500) {
        setShowContactForm(true);
      } else {
        setShowContactForm(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box mt={6}>
      <Grid
        container
        justifyContent="center"
        sx={{ backgroundColor: "#2a6f97" }}
      >
        <Grid item xs={12} md={10}>
          <Paper
            elevation={5}
            style={{
              padding: "20px",
              backgroundColor: "#2a6f97",
              position: "relative",
            }}
          >
            <Grid container spacing={4}>
              <Grid item xs={12} md={8}>
                <Box
                  sx={{
                    padding: "20px",
                    backgroundColor: "#012a4a",
                    color: "#fff",
                  }}
                >
                  <Avatar sx={{ width: 150, height: 150, margin: "0 auto" }}>
                    <Background />
                  </Avatar>
                  <Typography variant="h5" align="center" mt={2}>
                    Borko Advokat
                  </Typography>
                  <Typography variant="body1" align="center">
                    Lawyer at Law Firm XYZ
                  </Typography>
                  <Typography variant="body2" align="justify" mt={2}>
                    // Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Fusce // pulvinar arcu eget tincidunt porttitor. Etiam nec
                    massa nec // mauris accumsan vulputate sit amet eu velit.
                    Lorem ipsum dolor // sit amet, consectetur adipiscing elit.
                    Fusce pulvinar arcu // eget tincidunt porttitor. Etiam nec
                    massa nec mauris accumsan // vulputate sit amet eu velit.
                    Lorem ipsum dolor sit amet, // consectetur adipiscing elit.
                    Fusce pulvinar arcu eget // tincidunt porttitor. Etiam nec
                    massa nec mauris accumsan // vulputate sit amet eu velit.
                    Lorem ipsum dolor sit amet, // consectetur adipiscing elit.
                    Fusce pulvinar arcu eget // tincidunt porttitor. Etiam nec
                    massa nec mauris accumsan // vulputate sit amet eu velit. //{" "}
                  </Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box
                  mt={4}
                  sx={{
                    backgroundColor: "#012a4a",
                    color: "#fff",
                    padding: "10px",
                  }}
                >
                  <Typography variant="subtitle1">
                    Contact Information
                  </Typography>
                  <Typography variant="body2">Email:</Typography>
                  <Typography variant="body2">
                    borko.advokat@gmail.com
                  </Typography>
                  <Typography variant="body2">Phone:</Typography>
                  <Typography variant="body2"> (123) 456-7890</Typography>

                  <Typography variant="body2">Address: </Typography>
                  <Typography variant="body2">123 Main St</Typography>
                </Box>
              </Grid>
              <Grid item xs={12} md={4}>
                <Box></Box>
              </Grid>
            </Grid>
            {showAbout && (
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box mt={6}>
                    <Paper
                      sx={{ padding: "10px 20px", backgroundColor: "#2a6f97" }}
                    >
                      <Typography align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce pulvinar arcu eget tincidunt porttitor. Etiam nec
                        massa nec mauris accumsan vulputate sit amet eu velit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce pulvinar arcu eget tincidunt porttitor. Etiam nec
                        massa nec mauris accumsan vulputate sit amet eu velit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce pulvinar arcu eget tincidunt porttitor. Etiam nec
                        massa nec mauris accumsan vulputate sit amet eu velit.
                      </Typography>
                    </Paper>
                  </Box>
                </Grid>
                <Grid item xs={12} md={6}>
                  <Box mt={6}>
                    <Paper
                      sx={{ padding: "10px 20px", backgroundColor: "#2a6f97" }}
                    >
                      <Typography align="justify">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce pulvinar arcu eget tincidunt porttitor. Etiam nec
                        massa nec mauris accumsan vulputate sit amet eu velit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce pulvinar arcu eget tincidunt porttitor. Etiam nec
                        massa nec mauris accumsan vulputate sit amet eu velit.
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                        Fusce pulvinar arcu eget tincidunt porttitor. Etiam nec
                        massa nec mauris accumsan vulputate sit amet eu velit.
                      </Typography>
                    </Paper>
                  </Box>
                </Grid>
              </Grid>
            )}
            {showContactForm && <Contact />}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
