import React from "react";
import recipeHome from "./recipe-home.module.css";
import RecipeFooter from "./recipe-footer";
import RecipeHeader from "./recipe-header";
import coverimg from "./../assets/rnd01.jpg";
import RecipePage from "./recipe-page";

function RecipeHome() {
  return (
    <div className={recipeHome.homeContainer}>
      <div className={recipeHome.coverContainer}>
        {/* <img src={coverimg} width={1400} height={700}/> */}
        {/* <svg
          width="1400"
          height="701"
          viewBox="0 0 1400 701"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            id="sp00"
            d="M425.889 630.196C385.662 686.717 68.3736 791.768 0 540.373L1.97469e-05 1.00088H409.163H802.364C802.364 1.00088 1002.72 -6.0321 876.252 68.3166C801.828 112.069 757.033 241.929 808.874 374.93C824.693 238.869 850.6 75.0975 1089.66 13.0802C1550.45 -106.458 1455.79 794.724 1082.33 630.196C928.64 562.488 845.127 467.941 808.874 374.93C794.202 501.126 788.208 603.485 628.872 578.711C628.872 578.711 492.586 536.484 425.889 630.196Z"
            fill="#862B2B"
          />
        </svg> */}
        <RecipeHeader />
      </div>
      <RecipePage />
      <RecipeFooter />
    </div>
  );
}

export default RecipeHome;
