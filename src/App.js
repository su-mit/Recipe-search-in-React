import "./App.css";
import bg from "./Assets/dish.jpg";
import { useEffect, useState } from "react";

// Manul Imports
import Recipe from "./Recipe";

const App = () => {
  const APP_ID = "35226d27";
  const APP_KEY = "a2054713cbd45cb250326bd0768c9a76";

  // Use State
  const [recipes, setRecipes] = useState([]);
  const [search, setSearch] = useState("");
  const [querry, setQuerry] = useState("");

  // Use Effect
  useEffect(() => {
    getRecipes();
  }, [querry]);

  const getRecipes = async () => {
    const response = await fetch(
      `https://api.edamam.com/search?q=${querry}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );

    const data = await response.json();
    setRecipes(data.hits);
    console.log(data.hits);
  };

  const updateSearch = (e) => {
    setSearch(e.target.value);
  };

  const getSearch = (e) => {
    e.preventDefault();
    setQuerry(search);
  };

  // JSX code
  return (
    <div className="App">
      <div className="backgroud" style={{ backgroundImage: `url(${bg})` }}>
        <form onSubmit={getSearch} className="search-form">
          <input
            className="search-bar"
            type="text"
            value={search}
            onChange={updateSearch}
          />
          <button className="search-button" type="submit">
            Search
          </button>
        </form>
      </div>
      <div className="recipes">
        {recipes.map((recipe) => (
          <Recipe
            key={recipe.recipe.label}
            title={recipe.recipe.label}
            calories={Math.round(parseInt(recipe.recipe.calories))}
            image={recipe.recipe.image}
            ingredients={recipe.recipe.ingredients}
            dietLabels={recipe.recipe.dietLabels}
          />
        ))}
      </div>
    </div>
  );
};

export default App;
