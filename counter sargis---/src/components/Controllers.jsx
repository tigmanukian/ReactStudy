import { useCalculator } from "../Providers/Calculator.provider";

import styles from "../app.module.css";

function Controllers() {
  const { increment, decrement } = useCalculator();

  return (
    <div className={styles.buttonWrapper}>
      <button onClick={() => increment()} className={styles.button}>
        +
      </button>
      <button onClick={() => decrement()} className={styles.button}>
        -
      </button>
    </div>
  );
}

export default Controllers;
