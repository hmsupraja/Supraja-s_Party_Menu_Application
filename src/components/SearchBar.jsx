import { useState, useEffect } from "react";
import "../styles/SearchBar.css";

function SearchBar({ value, onSearch }) {
  const [searchText, setSearchText] = useState(value);

  useEffect(() => {
    setSearchText(value);
  }, [value]);

  const handleSearch = () => {
    onSearch(searchText.trim());
  };

  return (
    <div className="search-container">

      <input
        type="text"
        placeholder="Search recipes..."
        value={searchText}
        onChange={(e) =>
          setSearchText(e.target.value)
        }
        onKeyDown={(e) => {
          if (e.key === "Enter") {
            handleSearch();
          }
        }}
      />

      <button
        className="search-btn"
        onClick={handleSearch}
      >
        Search
      </button>

    </div>
  );
}

export default SearchBar;