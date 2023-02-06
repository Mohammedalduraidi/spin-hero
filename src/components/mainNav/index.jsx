import { useState } from "react";
import { BottomNavigation, BottomNavigationAction, Paper } from "@mui/material";
import MovieIcon from "@mui/icons-material/Movie";
import SearchIcon from "@mui/icons-material/Search";
import { useNavigate } from "react-router-dom";

export default function SimpleBottomNavigation() {
  const [value, setValue] = useState("characters");
  const navigate = useNavigate();

  const isActive = (currentValue) => {
    return value === currentValue;
  };

  const handleChange = (event, newValue) => {
    setValue(newValue);
    navigate(newValue);
  };

  return (
    <Paper
      sx={{ position: "fixed", bottom: 0, left: 0, right: 0, height: 56 }}
      elevation={3}
    >
      <BottomNavigation value={value} onChange={handleChange} showLabels>
        <BottomNavigationAction
          label="characters"
          value={"characters"}
          icon={
            <MovieIcon color={isActive("characters") ? "primary" : "default"} />
          }
          sx={{ color: isActive("characters") ? "inherit" : "#fff" }}
        />

        <BottomNavigationAction
          value={"search"}
          label="Search"
          icon={
            <SearchIcon color={isActive("search") ? "primary" : "default"} />
          }
          sx={{ color: isActive("search") ? "inherit" : "#fff" }}
        />
      </BottomNavigation>
    </Paper>
  );
}
