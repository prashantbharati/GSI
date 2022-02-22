import { makeStyles } from "@material-ui/core/styles";

export default makeStyles((theme) => ({
  form: {
    display: "flex",
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",

    gap: "30px",
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
    color: "white",
  },
}));
