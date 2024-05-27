import { useEffect } from "react";
import PropTypes from "prop-types";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";
import './Recipes.css'

const Recipes = ({handleAddToCook}) => {

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
        recipes.map(recipe => <Recipe key={recipe.id} handleAddToCook={handleAddToCook} recipe={recipe}></Recipe>)
      }
      </div>
    </div>
  );
};

Recipes.propTypes ={
  handleAddToCook:PropTypes.func
}

export default Recipes;