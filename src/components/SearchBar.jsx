function SearchBar({ value, onSearch }) {
  return (
    <div className="search-box">
      <input
        type="text"
        placeholder="Search recipes..."
        value={value}
        onChange={(e) => onSearch(e.target.value)}
      />
    </div>
  );
}

export default SearchBar;