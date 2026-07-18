
const categories = [
  "all",
  "starter",
  "main",
  "sides",
  "desert"
];

function CategoryFilter({ selected, onSelect }) {
  return (
    <div className="category-container">
      {categories.map((item) => (
        <button
          key={item}
          className={selected === item ? "active-btn" : ""}
          onClick={() => onSelect(item)}
        >
          {item.toUpperCase()}
        </button>
      ))}
    </div>
  );
}

export default CategoryFilter;