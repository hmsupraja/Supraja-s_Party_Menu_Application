import "../styles/SearchBar.css";

function SearchBar({
  search,
  setSearch,
  onSearch,
}) {
  const handleKeyDown = (event) => {
    if (event.key === "Enter") {
      onSearch();
    }
  };

  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search dishes by name..."
        value={search}
        onChange={(event) =>
          setSearch(event.target.value)
        }
        onKeyDown={handleKeyDown}
      />

      <button
        className="search-btn"
        onClick={onSearch}
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;