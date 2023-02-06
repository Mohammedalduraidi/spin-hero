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
import Characters from "pages/characters/index";
import Search from "pages/search/index";
import CharacterDetails from "pages/characters/details/index";

function App() {
  const { height, width } = useWindowDimensions();
  return (
    <ThemeProvider theme={theme}>
      <AppState>
        <BrowserRouter>
          <Header />
          <div
            style={{
              minHeight: height,
              width,
              height: "100%",
              overflow: "auto",
            }}
            className="app"
          >
            <Suspense fallback={<Loading />}>
              <Container className="container">
                <Routes>
                  <Route path="/characters" element={<Characters />} exact />
                  <Route path="/search" element={<Search />} exact />
                  <Route
                    path="/characters/:characterId/character/:characterName"
                    element={<CharacterDetails />}
                    exact
                  />
                  <Route
                    path="*"
                    element={<Navigate to="/characters" replace />}
                  />
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
