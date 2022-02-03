import React from "react";
import style from './recipe.module.css';
import RecipeDetail from "./recipe-detail";
import {Link} from 'react-router-dom';

const Recipe = ({title, calories, img}) => {
    const id = Math.random()*100;
    return (
        <Link to={`${id}`}>
            <div className={style.recipe}>
                <h1>{title}</h1>
                {/* <p>{Math.round(calories)}</p> */}
                <img src={img}   ></img>
            </div>
    </Link>
    );
}

export default Recipe;