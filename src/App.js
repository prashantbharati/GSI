import React, { useState } from "react";
import useStyles from "./styles";
import axios from "axios";
import { FaInstagram, FaTwitter, FaYoutube } from "react-icons/fa";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
const api = axios.create({
  baseURL: `https://localhost:5000/posts`,
});
function App() {
  const handleSubmit = (e) => {
    e.preventDefault();

    console.log(contact);
  };

  const classes = useStyles();
  const [contact, setContact] = useState({
    name: "",
    email: "",
    details: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "name") {
        return {
          name: value,
          email: prevValue.email,
          details: prevValue.details,
        };
      } else if (name === "email") {
        return {
          name: prevValue.name,
          email: value,
          details: prevValue.details,
        };
      } else if (name === "details") {
        return {
          name: prevValue.name,
          email: prevValue.email,
          details: value,
        };
      }
    });
  }

  return (
    <div className={classes.div1}>
      <br />
      <br /> <br /> <br />
      <form className={classes.form}>
        <Typography className={classes.title} variant="h4">
          Contact Us
        </Typography>

        <Typography className={classes.label}>Name</Typography>

        <input
          className={classes.input}
          onChange={handleChange}
          value={contact.name}
          name="name"
          placeholder="Enter your full name"
        />

        <Typography className={classes.label}>details</Typography>
        <input
          className={classes.input}
          onChange={handleChange}
          value={contact.email}
          name="details"
          placeholder="Enter your details"
        />

        <Typography className={classes.label}>Details</Typography>
        <input
          className={classes.input}
          onChange={handleChange}
          value={contact.details}
          name="details"
          placeholder="Enter your project details"
        />
        <Button
          variant="contained"
          color="black"
          size="large"
          className={classes.button}
          type="submit"
          onClick={handleSubmit}
        >
          Send Message
        </Button>
        {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
      </form>
      <div>
        <FaInstagram
          className={classes.fonts}
          styles={{ backgroundColor: "white", margin: "100px" }}
        />
        <FaTwitter
          className={classes.fonts}
          styles={{ backgroundColor: "white", padding: "20px" }}
        />
        <FaYoutube
          className={classes.fonts}
          styles={{ backgroundColor: "white", padding: "20px" }}
        />
      </div>
    </div>
  );
}

export default App;
