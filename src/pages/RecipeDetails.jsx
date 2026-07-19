
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipes from "../data/recipes";


import "../styles/Details.css";


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
  <div className="details-container">
    <img
      src={recipe.image}
      alt={recipe.name}
      className="details-image"
    />

    <div className="details-content">
      <div className="badges">
        <span className="badge category-badge">
          {recipe.category.toUpperCase()}
        </span>

        <span
          className={`badge ${
            recipe.isVeg ? "veg-badge" : "nonveg-badge"
          }`}
        >
          {recipe.isVeg ? "Veg" : "Non-Veg"}
        </span>
      </div>

      <h1>{recipe.name}</h1>

      <p>{recipe.fullDescription}</p>

      <h3>{recipe.servings}</h3>

      <div className="ingredients">
        <h3>Ingredients</h3>

        <ul>
          {recipe.ingredients.map((item, index) => (
            <li key={index}>
  <strong>{item.name}</strong> — {item.quantity}
</li>
          ))}
        </ul>
      </div>

      <div className="details-buttons">
        <button
          className="save-btn"
          onClick={handleSaveRecipe}
        >
          {saved ? "Saved ❤️" : "Save Recipe"}
        </button>

        <Link to="/">
          <button className="back-btn">
            ← Back to Menu
          </button>
        </Link>
      </div>
    </div>
  </div>
);
}

export default RecipeDetails;