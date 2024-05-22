import React from "react";
import styles from "@/styles/components/RecipeList.module.scss";
import RecipeCard from "./RecipeCard";
import Recipe from "@/types/recipe";

const RecipeList = ({ recipes }: { recipes: Recipe[] }) => {
  if (!Array.isArray(recipes)) {
    return <div>Loading...</div>;
  }
  return (
    <div className={styles.cardList}>
      {recipes.map((recipe) => (
        <RecipeCard key={recipe.id} recipe={recipe} />
      ))}
    </div>
  );
};

export default RecipeList;
