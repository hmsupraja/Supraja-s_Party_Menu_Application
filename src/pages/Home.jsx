import { useState } from "react";
import recipes from "../data/recipes";
import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import RecipeCard from "../components/RecipeCard";

function Home() {
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState("all");

  const filteredRecipes = recipes.filter((recipe) => {
    const matchesSearch = recipe.name
      .toLowerCase()
      .includes(search.toLowerCase());

    const matchesCategory =
      category === "all" || recipe.category === category;

    return matchesSearch && matchesCategory;
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

      <div className="recipes-grid">
        {filteredRecipes.map((recipe) => (
          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />
        ))}
      </div>
    </>
  );
}

export default Home;