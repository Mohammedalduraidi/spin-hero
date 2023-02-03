import { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";


export default function SimpleBottomNavigation() {
  const [value, setValue] = useState("movies");
  const navigate = useNavigate();


  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue)
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, height:56, background:"#0d0d0d"}}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction
          label="Movies"
          value={"movies"}
          icon={<MovieIcon />}
        />

        <BottomNavigationAction value={"search"} label="Search" icon={<SearchIcon />} />
      </BottomNavigation>
    </Paper>
  );
}
