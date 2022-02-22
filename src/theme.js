import { createTheme } from "@material-ui/core/styles";

const theme = createTheme({
  typography: {
    h4: {
      fontFamily: ['"Roboto Condensed"', "Open Sans"].join(","),
    },

    fontFamily: ['"Poppins"', "Open Sans"].join(","),
  },
});

export default theme;
