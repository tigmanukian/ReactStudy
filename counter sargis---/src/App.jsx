import CalculatorProvider from "./Providers/Calculator.provider";
import Controllers from "./components/Controllers";
import Screen from "./components/Screen";

import styles from "./app.module.css";

function App() {
  return (
    <div className={styles.app}>
      <CalculatorProvider>
        <Screen />
        <Controllers />
      </CalculatorProvider>
    </div>
  );
}


export default App;
