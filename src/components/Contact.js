import React, { useState } from "react";
import { TextField, Button, Box, Typography, Paper } from "@mui/material";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    lastName: "",
    phone: "",
    message: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Perform submit logic or API call with formData
    console.log(formData);
    // Reset form after submission
    setFormData({
      name: "",
      lastName: "",
      phone: "",
      message: "",
    });
  };

  return (
    <Box>
      <Box
        sx={{
          display: "flex",
          flexDirection: "column",
          maxWidth: "400px",
          margin: "80px auto",
          backgroundColor: "#f5f5f5",
          padding: "20px",
          borderRadius: "8px",
          padding: "20px",
        }}
        mt={6}
      >
        <Typography variant="h6" textAlign="center">
          Za sva pitanja slobodno nas kontaktirajte
        </Typography>
        <form onSubmit={handleSubmit}>
          <TextField
            name="name"
            label="Name"
            value={formData.name}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            color="primary"
          />
          <TextField
            name="lastName"
            label="Last Name"
            value={formData.lastName}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            color="primary"
          />
          <TextField
            name="phone"
            label="Phone"
            value={formData.phone}
            onChange={handleChange}
            fullWidth
            margin="normal"
            variant="outlined"
            color="primary"
          />
          <TextField
            name="message"
            label="Message"
            value={formData.message}
            onChange={handleChange}
            multiline
            rows={4}
            fullWidth
            margin="normal"
            variant="outlined"
            color="primary"
          />
          <Button
            type="submit"
            variant="contained"
            color="primary"
            sx={{ marginTop: "16px" }}
          >
            Submit
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Contact;
