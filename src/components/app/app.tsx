import React from "react";
import styles from "./app.module.css";
import { AppHeader } from "../app-header/app-header";
import { IngredientsCombine } from "../ingredients-combine/ingredients-combine";
import { Provider } from "react-redux";
import { store } from "../../services/store";

function App() {
  return (
    <Provider store={store}>
      <div className={styles["App"]}>
        <AppHeader />
        <IngredientsCombine />
      </div>
    </Provider>
  );
}

export default App;
