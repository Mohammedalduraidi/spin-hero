import React from "react";
import { LinearProgress, Typography } from "@mui/material";
import useWindowDimensions from "hooks/useWindowDimensions";

function Loading() {
  const { height, width } = useWindowDimensions();
  return (
    <div

      className="loading-container"
      style={{ height, width }}
    >
      <Typography
        style={{ fontSize: "1.5rem"}}
        color="default"
      >
        Loading...
      </Typography>
      <LinearProgress style={{ width: "22rem" }} color="primary" />
    </div>
  );
}

export default Loading;
