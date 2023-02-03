import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",
    primary: {
      light: "#e60c14",
      main: "#e60c14",
      dark: "#e60c14",
      contrastText: "#fff",
    },
    secondary: {
      light: "#0d0d0d",
      main: "#0d0d0d",
      dark: "#0d0d0d",
      contrastText: "#000",
    },
    background: {
      paper: "#fff",
      default: "#F7F7F7",
    },
  },
});

/*
 * factor (number [optional]): Default to 2.
 * This value determines the strength of font size resizing.
 * The higher the value, the less difference there is between font sizes on small screens.
 * The lower the value, the bigger font sizes for small screens. The value must be greater than 1.
 * */
const responsiveTheme = responsiveFontSizes(theme, { factor: 1000 });

export default responsiveTheme;
