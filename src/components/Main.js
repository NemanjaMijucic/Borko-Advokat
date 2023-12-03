import React, { useState, useEffect } from "react";
import {
  Avatar,
  Typography,
  Box,
  Paper,
  Grid,
  List,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import Contact from "./Contact";
import Background from "./Background";
import EmailIcon from "@mui/icons-material/Email";
import HomeIcon from "@mui/icons-material/Home";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import { useSpring, animated } from "react-spring";

const AnimatedBox = animated(Box);

const Main = () => {
  const [showContactForm, setShowContactForm] = useState(true);
  const [showAbout, setShowAbout] = useState(true);

  // React Spring animation configuration
  const aboutAnimation = useSpring({
    opacity: showAbout ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 700 }, // Adjust the duration here (in milliseconds)
  });

  const contactFormAnimation = useSpring({
    opacity: showContactForm ? 1 : 0,
    from: { opacity: 0 },
    config: { duration: 1000 }, // Adjust the duration here (in milliseconds)
  });

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setTimeout(() => {
          setShowAbout(true);
        }, 1000);
      } else {
        setShowAbout(true);
      }

      if (window.scrollY > 800) {
        setShowContactForm(true);
      } else {
        setShowContactForm(true);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <Box>
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
              <Grid item xs={12} md={7}>
                <AnimatedBox style={aboutAnimation}>
                  <Box
                    sx={{
                      padding: "20px",
                      backgroundColor: "#012a4a",
                      color: "#fff",
                      position: "relative", // Added position relative
                      zIndex: 1, // Added zIndex
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
                      // Lorem ipsum dolor sit amet, consectetur adipiscing
                      elit. Fusce // pulvinar arcu eget tincidunt porttitor.
                      Etiam nec massa nec // mauris accumsan vulputate sit amet
                      eu velit. Lorem ipsum dolor // sit amet, consectetur
                      adipiscing elit. Fusce pulvinar arcu // eget tincidunt
                      porttitor. Etiam nec massa nec mauris accumsan //
                      vulputate sit amet eu velit. Lorem ipsum dolor sit amet,
                      // consectetur adipiscing elit. Fusce pulvinar arcu eget
                      // tincidunt porttitor. Etiam nec massa nec mauris
                      accumsan // vulputate sit amet eu velit. Lorem ipsum dolor
                      sit amet, // consectetur adipiscing elit. Fusce pulvinar
                      arcu eget // tincidunt porttitor. Etiam nec massa nec
                      mauris accumsan // vulputate sit amet eu velit. //{" "}
                    </Typography>
                  </Box>
                </AnimatedBox>
              </Grid>
              <Grid item xs={12} md={5}>
                <AnimatedBox style={aboutAnimation}>
                  <Box
                    mt={4}
                    sx={{
                      backgroundColor: "#012a4a",
                      color: "#fff",
                      padding: "10px",
                    }}
                  >
                    <Typography variant="subtitle1">
                      Contact Information:
                    </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#012a4a",
                      color: "#fff",
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
                  <Box
                    mt={4}
                    sx={{
                      backgroundColor: "#012a4a",
                      color: "#fff",
                      padding: "10px",
                    }}
                  >
                    <Typography variant="subtitle1">Lorem Ipsum </Typography>
                  </Box>
                  <Box
                    sx={{
                      backgroundColor: "#012a4a",
                      color: "#fff",
                    }}
                  >
                    <List component="ul">
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="- dolor sit amet" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="- consetetur elit" />
                        </ListItemButton>
                      </ListItem>
                      <ListItem disablePadding>
                        <ListItemButton>
                          <ListItemText primary="- vulputate sit amet" />
                        </ListItemButton>
                      </ListItem>
                    </List>
                  </Box>
                </AnimatedBox>
              </Grid>
            </Grid>
            {showAbout && (
              <Grid container spacing={4}>
                <Grid item xs={12} md={6}>
                  <Box mt={6}>
                    <AnimatedBox style={aboutAnimation}>
                      <Paper
                        sx={{
                          padding: "10px 20px",
                          backgroundColor: "#2a6f97",
                        }}
                      >
                        <Typography align="justify">
                          Lorem ipsum dolor sit amet, consectetur adipiscing
                          elit. Fusce pulvinar arcu eget tincidunt porttitor.
                          Etiam nec massa nec mauris accumsan vulputate sit amet
                          eu velit. Lorem ipsum dolor sit amet, consectetur
                          adipiscing elit. Fusce pulvinar arcu eget tincidunt
                          porttitor. Etiam nec massa nec mauris accumsan
                          vulputate sit amet eu velit. Lorem ipsum dolor sit
                          amet, consectetur adipiscing elit. Fusce pulvinar arcu
                          eget tincidunt porttitor. Etiam nec massa nec mauris
                          accumsan vulputate sit amet eu velit.
                        </Typography>
                      </Paper>
                    </AnimatedBox>
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
            {showContactForm && (
              <AnimatedBox style={contactFormAnimation}>
                <Contact />
              </AnimatedBox>
            )}
          </Paper>
        </Grid>
      </Grid>
    </Box>
  );
};

export default Main;
