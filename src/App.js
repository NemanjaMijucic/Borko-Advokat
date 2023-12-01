import React from "react";
import Navbar from "./components/Navbar";
import Main from "./components/Main";
import Footer from "./components/Footer";
import { Box } from "@mui/material";

const App = () => {
  return (
    <Box>
      <Navbar />
      <Main />
      <Footer />
    </Box>
  );
};

export default App;
