import "../styles/VegToggle.css";

function VegToggle({
  diet,
  setDiet,
}) {

  return (
    <div className="diet-group">

      <button
        className={
          diet === "all"
            ? "diet-btn active"
            : "diet-btn"
        }
        onClick={() =>
          setDiet("all")
        }
      >
        All
      </button>

      <button
        className={
          diet === "veg"
            ? "diet-btn active"
            : "diet-btn"
        }
        onClick={() =>
          setDiet("veg")
        }
      >
        Veg
      </button>

      <button
        className={
          diet === "nonveg"
            ? "diet-btn active"
            : "diet-btn"
        }
        onClick={() =>
          setDiet("nonveg")
        }
      >
        Non-Veg
      </button>

    </div>
  );
}

export default VegToggle;