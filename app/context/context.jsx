"use client"; // required for stateful components in Next.js

import { createContext, useContext, useState } from "react";

// Create Context
const AppContext = createContext();

export function AppProvider({ children }) {
  const [state, setState] = useState("Hello from Context!");

  return (
    <AppContext.Provider value={{ state, setState }}>
      {children}
    </AppContext.Provider>
  );
}

// Custom Hook for consuming the context
export const useAppContext = () => useContext(AppContext);


