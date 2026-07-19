import { useMemo, useState } from "react";

import recipes from "../data/recipes";

import Header from "../components/Header";
import SearchBar from "../components/SearchBar";
import FilterButtons from "../components/FilterButtons";
import VegToggle from "../components/VegToggle";
import RecipeCard from "../components/RecipeCard";

import "../styles/Home.css";

function Home() {

  const [search, setSearch] = useState("");
  const [searchText, setSearchText] = useState("");
  const [category, setCategory] = useState("all");
  const [diet, setDiet] = useState("all");

  const filteredRecipes = useMemo(() => {

    return recipes.filter((recipe) => {

      const categoryMatch =
        category === "all" ||
        recipe.category === category;

      const dietMatch =
        diet === "all" ||
        (diet === "veg" && recipe.isVeg) ||
        (diet === "nonveg" && !recipe.isVeg);

      const searchMatch =
        recipe.name
          .toLowerCase()
          .includes(searchText.toLowerCase());

      return (
        categoryMatch &&
        dietMatch &&
        searchMatch
      );

    });

  }, [category, diet, searchText]);

  const savedRecipes =
    JSON.parse(
      localStorage.getItem(
        "party_menu_saved_recipes"
      )
    ) || [];

  return (

    <div className="home-page">

      <Header savedCount={savedRecipes.length} />

      <div className="filter-card">

        <div className="filter-section">

          <h5>CATEGORY</h5>

          <FilterButtons
            category={category}
            setCategory={setCategory}
          />

        </div>

        <div className="filter-section">

          <h5>DIET</h5>

          <VegToggle
            diet={diet}
            setDiet={setDiet}
          />

        </div>

        <div className="search-section">

          <SearchBar
            search={search}
            setSearch={setSearch}
            onSearch={() => setSearchText(search)}
          />

        </div>

      </div>

      <p className="items-count">
        {filteredRecipes.length} items found
      </p>

      <div className="recipes-grid">

        {filteredRecipes.map((recipe) => (

          <RecipeCard
            key={recipe.id}
            recipe={recipe}
          />

        ))}

      </div>

    </div>

  );

}

export default Home;