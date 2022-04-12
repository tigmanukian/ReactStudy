import { useState } from "react";

const useCalculator = () => {
  const [state, setState] = useState(0);

  const increment = (arg) => {
    if (!arg) {
      setState((prev) => prev + 1);

      return;
    }

    setState((prev) => prev + arg);
  };

  const decrement = (arg) => {
    if (!arg) {
      setState((prev) => prev - 1);
      return;
    }

    setState((prev) => prev - arg);
  };

  return {
    state,
    increment,
    decrement,
  };
};

export default useCalculator;
