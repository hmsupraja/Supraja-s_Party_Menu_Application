function VegToggle({ vegOnly, setVegOnly }) {
  return (
    <div className="veg-toggle">
      <label>
        <input
          type="checkbox"
          checked={vegOnly}
          onChange={() => setVegOnly(!vegOnly)}
        />
        Veg Only
      </label>
    </div>
  );
}

export default VegToggle;