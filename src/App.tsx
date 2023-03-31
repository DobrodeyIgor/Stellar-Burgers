import React, { useEffect, useState } from "react";
import logo from "./logo.svg";
import "./App.module.css";
import { fetchIngredients } from "./services/ingredients.service";
import { AppHeader } from "./components/app-header/app-header";
import {} from "@ya.praktikum/react-developer-burger-ui-components";
function App() {
  const [ingredients, setIngredients] = useState([]);
  const [isError, setError] = useState(false);
  const [isLoading, setLoading] = useState(true);
  useEffect(() => {
    fetchIngredients().then((res) => {
      setLoading(false);
      if (!res.success) {
        setError(true);
      } else {
        setIngredients(res.data);
      }
    });
  }, []);
  return (
    <div className='App'>
      <AppHeader />
    </div>
  );
}

export default App;
