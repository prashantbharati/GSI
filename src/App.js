import React, { useState } from "react";
import useStyles from "./styles";
import { FaInstagram, FaTwitter } from "react-icons/fa";
import { Typography } from "@material-ui/core";
import { Button } from "@material-ui/core";
function App() {
  const handlemyclick = () => {};
  const classes = useStyles();
  const [contact, setContact] = useState({
    fName: "",
    lName: "",
    email: "",
  });

  function handleChange(event) {
    const { name, value } = event.target;

    setContact((prevValue) => {
      if (name === "fName") {
        return {
          fName: value,
          lName: prevValue.lName,
          email: prevValue.email,
        };
      } else if (name === "lName") {
        return {
          fName: prevValue.fName,
          lName: value,
          email: prevValue.email,
        };
      } else if (name === "email") {
        return {
          fName: prevValue.fName,
          lName: prevValue.lName,
          email: value,
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
          value={contact.fName}
          name="fName"
          placeholder="Enter your full name"
        />

        <Typography className={classes.label}>Email</Typography>
        <input
          className={classes.input}
          onChange={handleChange}
          value={contact.lName}
          name="lName"
          placeholder="Enter your email"
        />

        <Typography className={classes.label}>Details</Typography>
        <input
          className={classes.input}
          onChange={handleChange}
          value={contact.email}
          name="email"
          placeholder="Enter your project details"
        />
        <Button
          variant="contained"
          //   backgroundColor="white"
          //   textColor="black"
          color="black"
          size="large"
          className={classes.button}
          onClick={handlemyclick}
        >
          Send Message
        </Button>
        {/* <FontAwesomeIcon icon="fa-brands fa-instagram" /> */}
        <FaInstagram />
      </form>
    </div>
  );
}

export default App;
