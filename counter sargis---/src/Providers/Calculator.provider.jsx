import { createContext, useContext } from "react";
import useCalculatorHook from "../hooks/useCalculator.hook";

const appContext = createContext(null);

function CalculatorProvider({ children }) {
  const value = useCalculatorHook();

  return <appContext.Provider value={value}>{children}</appContext.Provider>;
}

export function useCalculator() {
  return useContext(appContext);
}

export default CalculatorProvider;
