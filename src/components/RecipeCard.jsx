import { useNavigate } from "react-router-dom";
import "../styles/Card.css";

function RecipeCard({
  recipe,
  showRemove = false,
  onRemove,
}) {
  const navigate = useNavigate();

  const handleNavigate = () => {
    navigate(`/menu/${recipe.id}`);
  };

  return (
    <div
      className="recipe-card"
      onClick={handleNavigate}
    >
      <div className="recipe-image">

        <img
          src={recipe.image}
          alt={recipe.name}
        />

        <span
          className={`diet-badge ${
            recipe.isVeg ? "veg" : "nonveg"
          }`}
        >
          {recipe.isVeg ? "Veg" : "Non-Veg"}
        </span>

      </div>

      <div className="recipe-content">

        <small>
          {recipe.category.toUpperCase()}
        </small>

        <h3>{recipe.name}</h3>

        <p>{recipe.description}</p>

        <strong>{recipe.servings}</strong>

        {showRemove && (
          <button
            className="remove-btn"
            onClick={(event) => {
              event.stopPropagation();
              onRemove(recipe.id);
            }}
          >
            Remove Recipe
          </button>
        )}

      </div>

    </div>
  );
}

export default RecipeCard;