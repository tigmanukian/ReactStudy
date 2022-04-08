import { useContext } from "react";

import styles from "../app.module.css";
import { useCalculator } from "../Providers/Calculator.provider";

function Screen() {
  const { state } = useCalculator();

  return <div className={styles.screen}>{state}</div>;
}

export default Screen;
