import RecipeList from "@/components/recipe-list";
import React from "react";

/*

Since it is a server component, we will fetch the data here and we will pass it to the index.js file created inside components, inside recipe-list folder.

*/

const fetchData = async () => {
  try {
    const apiResponse = await fetch("https://dummyjson.com/recipes");
    const res = await apiResponse.json();
    return res?.recipes;
  } catch (error) {
    throw new Error(error);
  }
};
const Recipe_List = async () => {
  const recipeList = await fetchData();
  return <RecipeList recipeList={recipeList} />;
};

export default Recipe_List;
