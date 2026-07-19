import { useState } from "react";
import recipes from "../data/recipes";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import RecipeCard from "../components/RecipeCard";
import VegToggle from "../components/VegToggle";
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
    <>
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

<p>{filteredRecipes.length} items found</p>

      {filteredRecipes.length === 0 ? (
  <h2>No dishes found. Try different filters.</h2>
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
    </>
  );
}

export default Home;