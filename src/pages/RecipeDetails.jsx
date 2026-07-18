import { useParams } from "react-router-dom";
import recipes from "../data/recipes";

function RecipeDetails() {
  const { id } = useParams();

  const recipe = recipes.find(
    (item) => item.id === Number(id)
  );

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  return (
    <div>
      <img
        src={recipe.image}
        alt={recipe.name}
        width="400"
      />

      <h1>{recipe.name}</h1>

      <p>{recipe.fullDescription}</p>

      <h3>Ingredients</h3>

      <ul>
        {recipe.ingredients.map((item, index) => (
          <li key={index}>
            {item.name} - {item.quantity}
          </li>
        ))}
      </ul>

      <h4>{recipe.servings}</h4>
    </div>
  );
}

export default RecipeDetails;