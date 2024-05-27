import PropTypes from "prop-types";
import { FaRegClock, FaGripfire } from "react-icons/fa";
import "./recipe.css";

const Recipe = ({ recipe, handleAddToCook }) => {
  const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe;

  return (
    <div className="Recipe">
      <img src={recipe_image} alt="" />
      <h2 className="text-xl mt-6 mb-4">{recipe_name}</h2>
      <p className="text-[16px] mb-4 text-gray-500">{short_description}</p>
      <p className="text-xl font-bold mb-4">Ingredients: {ingredients.length}</p>
      <p className="text-xl mb-8 text-gray-500">
        {ingredients.slice(0, 3).map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </p>
      <div className="flex justify-between">
        <div className="flex items-center "> <FaRegClock></FaRegClock> <p className="ml-2">{preparing_time}utes</p></div>
        <div className="flex items-center "> <FaGripfire></FaGripfire> <p className="ml-2">{calories}</p></div>
      </div>
      <div className="text-center">
        <button 
        onClick={()=>handleAddToCook(recipe)}
        className="bg-green-400 py-3 px-6 rounded-full mt-8">Want to Cook</button>
        </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
  handleAddToCook: PropTypes.func
};

export default Recipe;
