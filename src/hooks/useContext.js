import { useContext } from "react";
import { appContextStore } from "context/createContext";

export function useAppContext() {
  return useContext(appContextStore);
}

