import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    gap: "30px",
  },
  button: {
    fontSize: "15px",
    fontWeight: "bold",
    position: "relative",
    right: "50px",
    color: "black",
    textShadow: "none",
    backgroundColor: "white",
  },
  input: {
    appearance: "none",
    border: "none",
    height: "auto",
    padding: "10px",
    fontSize: "16px",
    background:
      "linear-gradient(90deg,#ffffff,#ffffff) left bottom/100% 2px no-repeat",
  },
  div1: {
    textAlign: "center",
  },
  title: {
    position: "relative",
    right: "50px",
    color: "white",
  },
  label: {
    position: "relative",
    right: "90px",
    color: "white",
  },
}));
