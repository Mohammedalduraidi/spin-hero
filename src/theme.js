import { createTheme, responsiveFontSizes } from "@mui/material";

const theme = createTheme({
  palette: {
    type: "light",

    default: {
      light: "#FFF",
      main: "#FFF",
      dark: "#FFF",
      contrastText: "#0d0d0d",
    },
    primary: {
      light: "#E50914",
      main: "#E50914",
      dark: "#E50914",
      contrastText: "#fff",
    },
    secondary: {
      light: "#586977",
      main: "#586977",
      dark: "#586977",
      contrastText: "#fff",
    },
    background: {
      paper: "#0d0d0d",
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
