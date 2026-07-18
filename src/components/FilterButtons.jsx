function FilterButtons({ category, setCategory }) {
  const categories = [
    "all",
    "starter",
    "main",
    "sides",
    "desert",
  ];

  return (
    <div className="filter-buttons">
      {categories.map((item) => (
        <button
          key={item}
          onClick={() => setCategory(item)}
          className={category === item ? "active" : ""}
        >
          {item.charAt(0).toUpperCase() + item.slice(1)}
        </button>
      ))}
    </div>
  );
}

export default FilterButtons;