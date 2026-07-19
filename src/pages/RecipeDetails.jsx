import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import recipes from "../data/recipes";
import NotFound from "./NotFound";

import "../styles/Details.css";

function RecipeDetails() {
  const { id } = useParams();

  const [saved, setSaved] = useState(false);

  const recipe = recipes.find(
    (item) => item.id === Number(id)
  );

  useEffect(() => {
    if (!recipe) return;

    const savedRecipes =
      JSON.parse(
        localStorage.getItem(
          "party_menu_saved_recipes"
        )
      ) || [];

    setSaved(
      savedRecipes.some(
        (item) => item.id === recipe.id
      )
    );
  }, [recipe]);

  if (!recipe) {
    return <NotFound />;
  }

  const handleSaveRecipe = () => {
    let savedRecipes =
      JSON.parse(
        localStorage.getItem(
          "party_menu_saved_recipes"
        )
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
    <div className="details-page">

      <div className="details-top">

        <Link to="/">
          <button className="top-btn back-btn">
            ← Back to Menu
          </button>
        </Link>

        <div className="top-right">

          <Link to="/saved-recipes">
            <button className="top-btn saved-btn">
              Saved Recipes
            </button>
          </Link>

          <button
            className={
              saved
                ? "top-btn saved-active"
                : "top-btn save-btn"
            }
            onClick={handleSaveRecipe}
          >
            {saved
              ? "Saved "
              : "Save Recipe"}
          </button>

        </div>

      </div>

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
                recipe.isVeg
                  ? "veg-badge"
                  : "nonveg-badge"
              }`}
            >
              {recipe.isVeg
                ? "Veg"
                : "Non-Veg"}
            </span>

          </div>

          <h1>{recipe.name}</h1>

          <h3>{recipe.servings}</h3>

          <p>{recipe.fullDescription}</p>

        </div>

      </div>

      <div className="ingredients">

        <h2>Ingredients</h2>

        <ul>

          {recipe.ingredients.map(
            (item, index) => (

              <li key={index}>

                <strong>
                  {item.name}
                </strong>

                <span>
                  {item.quantity}
                </span>

              </li>

            )
          )}

        </ul>

      </div>

    </div>
  );
}

export default RecipeDetails;