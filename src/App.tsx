import React from "react";
import styles from "./App.module.css";
import { AppHeader } from "./components/app-header/app-header";
import { IngredientsCombine } from "./components/ingredients-combine/ingredients-combine";

function App() {
  return (
    <div className={styles["App"]}>
      <AppHeader />
      <IngredientsCombine />
    </div>
  );
}

export default App;
