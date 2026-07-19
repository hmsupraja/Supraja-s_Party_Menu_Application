import "./../styles/Header.css";
import { Link, useNavigate } from "react-router-dom";

function Header() {
  const navigate = useNavigate();

  const user = JSON.parse(
    localStorage.getItem("party_menu_user")
  );

  const savedRecipes =
    JSON.parse(
      localStorage.getItem("party_menu_saved_recipes")
    ) || [];

  const handleLogout = () => {
    localStorage.removeItem("party_menu_token");
    localStorage.removeItem("party_menu_user");
    localStorage.removeItem("party_menu_saved_recipes");

    navigate("/login");
  };

  return (
    <header className="header">
      <div className="header-content">

        <div>
          <h1>Party Menu</h1>
          <p>Welcome, {user?.name}</p>
        </div>

        <div className="header-actions">

          <Link to="/saved-recipes">
            <button className="saved-btn">
              Saved Recipes ({savedRecipes.length})
            </button>
          </Link>

          <button
            className="logout-btn"
            onClick={handleLogout}
          >
            Logout
          </button>

        </div>
      </div>
    </header>
  );
}

export default Header;