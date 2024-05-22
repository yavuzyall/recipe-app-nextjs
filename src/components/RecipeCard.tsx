import React from "react";
import styles from "@/styles/components/RecipeCard.module.scss";
import Image from "next/image";
import Recipe from "@/types/recipe";

interface RecipeCardProps {
  recipe: Recipe;
}

const RecipeCard = ({ recipe }: RecipeCardProps) => {
  return (
    <div className={styles.card}>
      <div className={styles.imageWrapper}>
        <img src={recipe.image} alt="et yahni" width={300} height={300}></img>
      </div>
      <div className={styles.recipeName}>
        <span>{recipe.name}</span>
      </div>
    </div>
  );
};

export default RecipeCard;
