import { Link } from "react-router-dom";

import "../styles/NotFound.css";

function NotFound() {
  const token = localStorage.getItem("party_menu_token");

  return (
    <div className="notfound-page">

      <div className="notfound-card">

        <h1>404</h1>

        <h2>Page Not Found</h2>

        <p>
          The page you are looking for does not
          exist or has been moved.
        </p>

        <Link to={token ? "/" : "/signin"}>
          <button className="notfound-btn">
            {token ? "Back to Menu" : "Back to Sign In"}
          </button>
        </Link>

      </div>

    </div>
  );
}

export default NotFound;