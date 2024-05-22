"use client";
import { getAllRecipes } from "@/services/recipeService";
import "../styles/HomePage.scss";
import RecipeList from "@/components/RecipeList";
import Recipe from "@/types/recipe";
import { useEffect, useState } from "react";

export default function Home() {
  const [recipes, setRecipes] = useState<Recipe[]>([]);

  useEffect(() => {
    const fetchRecipes = async () => {
      try {
        const allRecipes = await getAllRecipes();
        setRecipes(allRecipes.recipes);
      } catch (error) {
        console.error(error);
      }
    };

    fetchRecipes();
  }, []);

  return (
    <div className="mainDiv">
      <div className="formDiv">
        <form>
          <select name="foodSelector" id="foodSelector">
            <option value="chicken">Chicken</option>
            <option value="beef">Beef</option>
            <option value="lamb">Lamb</option>
            <option value="pork">Pork</option>
          </select>
          <span>OR</span>
          <div className="inputGroup">
            <input type="text" placeholder="Search for a recipe" />
            <button type="submit">Search</button>
          </div>
        </form>
      </div>
      <div>
        <RecipeList recipes={recipes} />
      </div>
    </div>
  );
}
