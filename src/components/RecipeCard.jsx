import { Link } from "react-router-dom";
import "../styles/Card.css";

function RecipeCard({ recipe }) {
  return (
    <div className="recipe-card">
      <img src={recipe.image} alt={recipe.name} />

      <div className="card-body">
        <h3>{recipe.name}</h3>

        <p>{recipe.description}</p>

        <span className={recipe.isVeg ? "veg" : "nonveg"}>
          {recipe.isVeg ? "Veg" : "Non Veg"}
        </span>

        <Link to={`/recipe/${recipe.id}`}>
          <button>View Recipe</button>
        </Link>
      </div>
    </div>
  );
}

export default RecipeCard;