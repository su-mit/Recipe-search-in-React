import { React } from "react";
import style from "./Recipes.module.css";

const Recipe = ({ title, calories, image, ingredients, dietLabels }) => {
  return (
    <div className={style.recipe}>
      <img className={style.image} src={image} alt="Recipe Image" />
      <div className={style.text}>
        <h2>{title}</h2>
        <p>
          <b>Calories: {calories}</b>
        </p>
        <div className={style.dietLabels}>
          {dietLabels.map((tag) => (
            <p className={style.tag}>{tag}</p>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Recipe;
