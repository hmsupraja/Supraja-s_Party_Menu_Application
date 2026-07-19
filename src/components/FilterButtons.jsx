import "../styles/FilterButtons.css";

function FilterButtons({
  category,
  setCategory,
}) {

  const categories = [
    "all",
    "starter",
    "main",
    "sides",
    "desert",
  ];

  return (
    <div className="filter-group">

      {categories.map((item) => (

        <button
          key={item}
          className={
            category === item
              ? "filter-btn active"
              : "filter-btn"
          }
          onClick={() =>
            setCategory(item)
          }
        >
          {item.charAt(0).toUpperCase() +
            item.slice(1)}
        </button>

      ))}

    </div>
  );
}

export default FilterButtons;