import React from "react";
import recipeHome from "./recipe-home.module.css";
import RecipeFooter from "./recipe-footer";
import RecipeHeader from "./recipe-header";

function RecipeHome() {
  return (
    <div className={recipeHome.homeContainer}>
      <RecipeHeader />
      <h1>Recipe Home</h1>
      <RecipeFooter />
    </div>
  );
}

export default RecipeHome;
