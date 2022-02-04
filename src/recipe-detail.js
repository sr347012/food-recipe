import react, {useEffect, useState} from "react";
import style from './recipe-detail.module.css';
const RecipeDetail = () => {
    // console.log(window.location.href);
    const id = window.location.href.split('/').reverse()[0];
    const APP_ID = 'bfdfa512';
    const API_KEY = '8f45f8725135b3df2cdf26dd2f48569f';

    const [recipeDetail, setRecipeDetail] = useState({});

    const getRecipeDetails = async () =>  {
        const exampleReq = `https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${API_KEY}`
        const response =await fetch (`https://api.edamam.com/api/recipes/v2/${id}?type=public&app_id=${APP_ID}&app_key=${API_KEY}`)
        const data = await response.json();
        // console.log(data);
        setRecipeDetail(data.recipe);
      }

      useEffect (() => {
        getRecipeDetails();
      },[]);

    return (
        <div className={style.mainContainer}>
            {/* <h1>Hello {id}</h1> */}
            <div className={style.leftContainer}>
                <img src={recipeDetail.image}></img>
                <div className={style.leftDetails}></div>
            </div>
            <div className={style.rightContainer}>
            <h1>{recipeDetail.label}</h1>                
                <h2>{recipeDetail.dishType}</h2>
                {recipeDetail.ingredientLines}

                <h4>{recipeDetail.mealType}</h4>
                <h5>{Math.round(recipeDetail.calories)}</h5>
            </div>
        </div>
    )
}

export default RecipeDetail