import { useState } from "react";
import recipes from "../data/recipes";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import RecipeCard from "../components/RecipeCard";
import VegToggle from "../components/VegToggle";

import "../styles/Home.css";


function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");
const [diet, setDiet] = useState("all");
  const filteredRecipes = recipes.filter((recipe) => {
  const matchesSearch = recipe.name
    .toLowerCase()
    .includes(search.toLowerCase());

  const matchesCategory =
    category === "all" || recipe.category === category;

  const matchesDiet =
    diet === "all" ||
    (diet === "veg" && recipe.isVeg) ||
    (diet === "nonveg" && !recipe.isVeg);

  return (
    matchesSearch &&
    matchesCategory &&
    matchesDiet
  );
});

  return (
    <div className="home-container">
      <Header />

      <SearchBar
  value={search}
  onSearch={setSearch}
/>

      <FilterButtons
        category={category}
        setCategory={setCategory}
      />

      <VegToggle
  diet={diet}
  setDiet={setDiet}
/>

<p className="items-count">
    {filteredRecipes.length} items found
</p>

      {filteredRecipes.length === 0 ? (
  <div className="empty-state">
    <h2>No dishes found</h2>
    <p>Try different filters.</p>
</div>
) : (
  <div className="recipes-grid">
    {filteredRecipes.map((recipe) => (
      <RecipeCard
        key={recipe.id}
        recipe={recipe}
      />
    ))}
  </div>
)}
    </div>
  );
}

export default Home;