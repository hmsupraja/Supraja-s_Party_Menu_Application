import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import RecipeCard from "../components/RecipeCard";

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
      <h1>Saved Recipes</h1>

      <p>{savedRecipes.length} recipe(s) saved</p>

      <Link to="/">
        <button>← Back to Menu</button>
      </Link>

      {savedRecipes.length === 0 ? (
        <h2>No saved recipes yet</h2>
      ) : (
        <div className="recipes-grid">
          {savedRecipes.map((recipe) => (
            <div key={recipe.id}>
              <RecipeCard recipe={recipe} />

              <button
                onClick={() => removeRecipe(recipe.id)}
              >
                Remove
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default SavedRecipes;