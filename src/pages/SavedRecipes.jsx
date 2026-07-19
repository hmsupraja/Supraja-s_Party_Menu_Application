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

  const removeRecipe = (id) => {
    const updatedRecipes = savedRecipes.filter(
      (recipe) => recipe.id !== id
    );

    setSavedRecipes(updatedRecipes);

    localStorage.setItem(
      "party_menu_saved_recipes",
      JSON.stringify(updatedRecipes)
    );
  };

  return (
    <div className="saved-page">

      <div className="saved-header">
        <div>
          <h1>Saved Recipes</h1>
          <p>{savedRecipes.length} recipe(s) saved</p>
        </div>

        <Link to="/">
          <button className="back-btn">
            ← Back to Menu
          </button>
        </Link>
      </div>

      {savedRecipes.length === 0 ? (
        <div className="empty-state">
          <h2>No saved recipes yet</h2>

          <p>Save your favorite recipes to find them here.</p>

          <Link to="/">
            <button className="browse-btn">
              Browse Menu
            </button>
          </Link>
        </div>
      ) : (
        <div className="saved-recipes-grid">
          {savedRecipes.map((recipe) => (
            <div
              className="saved-card"
              key={recipe.id}
            >
              <RecipeCard recipe={recipe} />

              <button
                className="remove-btn"
                onClick={() => removeRecipe(recipe.id)}
              >
                Remove Recipe
              </button>
            </div>
          ))}
        </div>
      )}

    </div>
  );
}

export default SavedRecipes;