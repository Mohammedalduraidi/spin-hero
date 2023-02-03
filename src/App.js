import { Suspense } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import "./App.css";
import theme from "theme";
import { Container, ThemeProvider } from "@mui/material";
import useWindowDimensions from "hooks/useWindowDimensions";
import AppState from "context/appContext";

import Header from "components/header/index";
import BottomNavigation from "components/mainNav/index";
import Loading from "components/loading/index";
import Movies from "pages/movies/index";
import Search from "pages/search/index";

function App() {
  const { height, width, headerHeight } = useWindowDimensions();
  return (
    <ThemeProvider theme={theme}>
      <AppState>
        <BrowserRouter>
          <div style={{ height: headerHeight, width }}>
            <Header />
          </div>
          <div style={{ height, width }} className="app">
            <Suspense fallback={<Loading />}>
              <Container className="container">
                <Routes>
                  <Route path="/movies" element={<Movies />} exact />
                  <Route path="/search" element={<Search />} exact />
                  <Route path="*" element={<Navigate to="/movies" replace />} />
                </Routes>
              </Container>
            </Suspense>
          </div>
          <BottomNavigation />
        </BrowserRouter>
      </AppState>
    </ThemeProvider>
  );
}

export default App;
