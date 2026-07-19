import { Link, useNavigate } from "react-router-dom";
import "../styles/Header.css";

function Header({ savedCount }) {
  const navigate = useNavigate();

  const user =
    JSON.parse(
      localStorage.getItem("party_menu_user")
    ) || {};

  function handleLogout() {
    localStorage.removeItem("party_menu_token");
    localStorage.removeItem("party_menu_user");

    navigate("/signin");
  }

  return (
    <header className="header">

      <div>

        <h1>Party Menu</h1>

        <p>
          Welcome, {user.name || "Admin User"}
        </p>

      </div>

      <div className="header-buttons">

        <Link to="/saved-recipes">
          <button className="saved-btn">
            Saved Recipes ({savedCount})
          </button>
        </Link>

        <button
          className="logout-btn"
          onClick={handleLogout}
        >
          Logout
        </button>

      </div>

    </header>
  );
}

export default Header;