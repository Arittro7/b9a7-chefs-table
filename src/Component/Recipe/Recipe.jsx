import PropTypes from "prop-types";
import { FaRegClock, FaGripfire } from "react-icons/fa";
import "./recipe.css";

const Recipe = ({ recipe }) => {
  const { recipe_name, recipe_image, short_description, ingredients, preparing_time, calories} = recipe;

  return (
    <div className="Recipe">
      <img src={recipe_image} alt="" />
      <h2 className="text-left text-xl">{recipe_name}</h2>
      <p>{short_description}</p>
      <p>Ingredients: {ingredients.length}</p>
      <p>
        {ingredients.slice(0, 3).map((ingredient, index) => (
          <li key={index}>{ingredient}</li>
        ))}
      </p>
      <div className="flex justify-between">
        <div className="flex items-center "> <FaRegClock></FaRegClock> <p className="ml-2">{preparing_time}utes</p></div>
        <div className="flex items-center "> <FaGripfire></FaGripfire> <p className="ml-2">{calories}</p></div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object,
};

export default Recipe;
