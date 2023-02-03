import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { Container ,ThemeProvider} from "@mui/material";
import useWindowDimensions from "hooks/useWindowDimensions";
import theme from "theme";
import "./App.css";

import Header from "components/header/index";
import BottomNavigation from "components/mainNav/index";
import Movies from "pages/movies/index";
import Search from "pages/search/index";

function App() {
  const headerHeight = 55; // px
  const navHeight = 56; //px
  const { height, width } = useWindowDimensions(headerHeight + navHeight) ;
  return (
    <ThemeProvider theme={theme}>
    <BrowserRouter>
    <div style={{height:headerHeight, width}}>
    <Header />
    </div>
    <div style={{ height, width }} className="app">
      <Container className="container">
        <Routes>
          <Route path="/movies" element={<Movies />} exact />
          <Route path="/search" element={<Search />} exact />
          <Route path="*" element={<Navigate to="/movies" replace />} />
        </Routes>
      </Container>
    </div>
      <BottomNavigation />
    </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
