import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

import RecipeCard from "../components/RecipeCard";

import "../styles/SavedRecipes.css";

function SavedRecipes() {
  const [savedRecipes, setSavedRecipes] = useState([]);

  useEffect(() => {
    const recipes =
      JSON.parse(
        localStorage.getItem("party_menu_saved_recipes")
      ) || [];

    setSavedRecipes(recipes);
  }, []);

  function removeRecipe(id) {
    const updatedRecipes = savedRecipes.filter(
      (recipe) => recipe.id !== id
    );

    setSavedRecipes(updatedRecipes);

    localStorage.setItem(
      "party_menu_saved_recipes",
      JSON.stringify(updatedRecipes)
    );
  }

  return (
    <div className="saved-page">

      <div className="saved-header">

        <div>
          <h1>Saved Recipes</h1>

          <p>
            {savedRecipes.length} recipe
            {savedRecipes.length !== 1 ? "s" : ""} saved
          </p>
        </div>

        <Link to="/">
          <button className="back-btn">
            ← Back to Menu
          </button>
        </Link>

      </div>

      {savedRecipes.length === 0 ? (

        <div className="empty-state">

          <h2>No saved recipes yet.</h2>

          <Link
            to="/"
            className="browse-link"
          >
            Browse the menu
          </Link>

        </div>

      ) : (

        <div className="saved-grid">

          {savedRecipes.map((recipe) => (

            <RecipeCard
              key={recipe.id}
              recipe={recipe}
              showRemove={true}
              onRemove={removeRecipe}
            />

          ))}

        </div>

      )}

    </div>
  );
}

export default SavedRecipes;