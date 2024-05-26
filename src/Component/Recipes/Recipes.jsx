import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import './Recipes.css'

const Recipes = () => {

  const [recipes, setRecipes] = useState([]);

  useEffect(()=>{
    fetch('recipe.json')
    .then(res => res.json())
    // .then(data => console.log(data))
    .then(data => setRecipes(data))
  },[])

  return (
    <div className="md: w-2/3">
      <h2>Recipe card will show here</h2>
      <div className="recipes-container">
      {
        recipes.map(recipe => <Recipe key={recipe.id} recipe={recipe}></Recipe>)
      }
      </div>
    </div>
  );
};

export default Recipes;