import React, { useReducer } from "react";
import { getCharacterByCriteria } from "api/api";

import { appContextStore } from "context/createContext";
import {
  APP_LOADER,
  PAGINATION,
  RESET_PAGINATION,
  GET_CHARACTER,
} from "context/types";
import AppReducer, { initialState } from "./appReducer";

const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  const setAppLoader = (isLoading = false) =>
    dispatch({ type: APP_LOADER, payload: isLoading });

  const setPagination = (filterOptions = state.filterOptions) =>
    dispatch({ type: PAGINATION, payload: filterOptions });

  const resetFilter = () => dispatch({ type: RESET_PAGINATION });

  function getRandomIndex(array) {
    return Math.floor(Math.random() * array.length);
  }

  let counter = 0;
  const generateRandomMovie = async (comics = []) => {
    if (counter === 5) {
      counter = 0;
      return;
    }
    var randomIndex = getRandomIndex(comics);
    const resourceURI = comics[randomIndex]?.resourceURI ?? false;
    if (!comics[randomIndex] || !resourceURI) return;
    const comicsId = resourceURI.split("/").pop();

    const whereCriteria = { comics: comicsId };
    const result = await fetchCharacterByCriteria(whereCriteria);
    counter++;
    return result.length > 0 ? true : generateRandomMovie(comics);
  };

  const fetchCharacterByCriteria = async (whereCriteria) => {
    try {
      setAppLoader(true);
      const { data } = await getCharacterByCriteria({
        ...whereCriteria,
      });
      const character = data?.data?.results[0] ?? {};
      dispatch({ type: GET_CHARACTER, payload: character });
      return data?.data?.results[0] ?? [];
    } catch (error) {
      console.error(error);
    } finally {
      setAppLoader(false);
    }
  };

  return (
    <appContextStore.Provider
      value={{
        ...state,
        setAppLoader,
        setPagination,
        resetFilter,
        fetchCharacterByCriteria,
        generateRandomMovie,
      }}
    >
      {children}
    </appContextStore.Provider>
  );
};

export default AppState;
