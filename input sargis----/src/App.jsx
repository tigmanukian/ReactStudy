import { useState, useEffect } from "react";

import List from "./components/List";
import ListForm from "./components/ListForm";

import styles from "./app.module.css";
import ListItemsProvider from "./providers/ListItemsProvider";

function App() {
  return (
    <div className={styles.app}>
      <ListItemsProvider>
        <ListForm />
        <List />
      </ListItemsProvider>
    </div>
  );
}

export default App;
