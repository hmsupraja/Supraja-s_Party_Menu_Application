
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipes from "../data/recipes";

function RecipeDetails() {
  const { id } = useParams();
  const [saved, setSaved] = useState(false);
  const recipe = recipes.find(
    (item) => item.id === Number(id)
  );
  useEffect(() => {
  const savedRecipes =
    JSON.parse(
      localStorage.getItem("party_menu_saved_recipes")
    ) || [];

  const exists = savedRecipes.some(
    (item) => item.id === recipe?.id
  );

  setSaved(exists);
}, [recipe]);

  if (!recipe) {
    return <h2>Recipe not found</h2>;
  }

  const handleSaveRecipe = () => {
  let savedRecipes =
    JSON.parse(
      localStorage.getItem("party_menu_saved_recipes")
    ) || [];

  if (saved) {
    savedRecipes = savedRecipes.filter(
      (item) => item.id !== recipe.id
    );
  } else {
    savedRecipes.push(recipe);
  }

  localStorage.setItem(
    "party_menu_saved_recipes",
    JSON.stringify(savedRecipes)
  );

  setSaved(!saved);
};

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
      <button onClick={handleSaveRecipe}>
  {saved ? "Saved ❤️" : "Save Recipe"}
</button>

<br />
<br />

<Link to="/">
  <button>← Back to Home</button>
</Link>
    </div>
  );
}

export default RecipeDetails;