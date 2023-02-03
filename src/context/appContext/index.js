import React, { useReducer } from "react";
import { appContextStore } from "context/createContext";
import AppReducer, { initialState } from "./appReducer";


const AppState = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  return (
    <appContextStore.Provider
      value={{
        ...state,
      }}
    >
      {children}
    </appContextStore.Provider>
  );
};

export default AppState;
