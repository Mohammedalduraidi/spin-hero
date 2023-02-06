import React from "react";
import { useLocation } from "react-router-dom";
import { Button, Paper, Snackbar } from "@mui/material";
import MuiAlert from "@mui/material/Alert";
import useWindowDimensions from "hooks/useWindowDimensions";
import { useAppContext } from "hooks/useContext";

const Alert = React.forwardRef(function Alert(props, ref) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />;
});

const Header = () => {
  const location = useLocation();
  const canGenerate = location.pathname.length > 18;

  const [open, setOpen] = React.useState(false);
  const [message, setMessage] = React.useState("");

  const { headerHeight } = useWindowDimensions();
  const { character, generateRandomMovie } = useAppContext();

  const handleOpenSnakeBar = (message = "") => {
    setOpen(true);
    setMessage(message);
  };

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }

    setOpen(false);
  };

  const onHandleGenerateMovie = () => {
    if (!canGenerate)
      return handleOpenSnakeBar("Please choose a superhero first!");
    const comics = character?.comics?.items ?? [];
    generateRandomMovie(comics);
  };

  return (
    <Paper
      sx={{
        zIndex: 100,
        boxShadow: "0px 1px 5px black",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "100%",
        height: headerHeight,
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
      }}
    >
      <Button
        color={canGenerate ? "primary" : "secondary"}
        variant="contained"
        onClick={onHandleGenerateMovie}
      >
        Generate a random movie
      </Button>

      <Snackbar
        open={open && !!message}
        autoHideDuration={3000}
        onClose={handleClose}
        anchorOrigin={{ vertical: "top", horizontal: "right" }}
      >
        <Alert onClose={handleClose} severity="error" sx={{ width: "100%" }}>
          {message}
        </Alert>
      </Snackbar>
    </Paper>
  );
};

export default Header;
