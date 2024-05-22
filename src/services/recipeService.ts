import Recipe from "@/types/recipe";
import axios from "axios";

const BASE_URL = "https://dummyjson.com/recipes";

export const getAllRecipes = async () => {
  const response = await axios.get(`${BASE_URL}`);
  const data = await response.data;
  return data;
};
