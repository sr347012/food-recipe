import React from "react";
import style from './recipe.module.css';

const Recipe = ({title, calories, img}) => {
    return (
    <div className={style.recipe}>
        <h1>{title}</h1>
        {/* <p>{Math.round(calories)}</p> */}
        <img src={img}   ></img>
    </div>
    );
}

export default Recipe;