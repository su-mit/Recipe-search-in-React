import "./App.css";
import { useEffect, useState } from "react";

// Manul Imports
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "35226d27";
  const APP_KEY = "a2054713cbd45cb250326bd0768c9a76";

  // Use State
  const [recipes, setRecipes] = useState();

  // Use Effect
  useEffect(() => {
    getRecipes();
  }, []);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    console.log(recipes);
  };

  return (
    <div className="App">
      <form className="search-form">
        <input className="search-bar" type="text" />
        <button className="search-button" type="submit">
          Search
        </button>
      </form>
    </div>
  );
};

export default App;
