import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../styles/Login.css";
import logo from "../assets/logo.png";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  const handleSubmit = async (event) => {
    event.preventDefault();

    setError("");

    // Validation
    if (!email.trim() || !password.trim()) {
      setError("Email and password are required");
      return;
    }

    setLoading(true);

    try {
      const response = await fetch(
        "https://serverless-api-teal.vercel.app/api/auth/signin",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({
            email,
            password,
          }),
        }
      );

      const data = await response.json();

      if (data.success) {
        localStorage.setItem(
          "party_menu_token",
          data.data.token
        );

        localStorage.setItem(
          "party_menu_user",
          JSON.stringify(data.data.user)
        );

        navigate("/");
      } else {
        setError(data.message);
      }
    } catch (error) {
      setError("Something went wrong. Please try again.");
    }

    setLoading(false);
  };

  return (
    <div className="login-container">

      <div className="login-card">

        <div className="logo-container">

          <img
            src={logo}
            alt="Party Menu Logo"
            className="logo-image"
          />

          <h1>Party Menu</h1>

          <p>
            Sign in to explore our delicious menu
          </p>

        </div>

        {error && (
          <div className="error-box">
            {error}
          </div>
        )}

        <form onSubmit={handleSubmit}>

          <label>Email</label>

          <input
            type="email"
            placeholder="admin@example.com"
            value={email}
            onChange={(event) => {
              setEmail(event.target.value);
              setError("");
            }}
          />

          <label>Password</label>

          <input
            type="password"
            placeholder="Enter your password"
            value={password}
            onChange={(event) => {
              setPassword(event.target.value);
              setError("");
            }}
          />

          <button
            type="submit"
            disabled={loading}
          >
            {loading
              ? "Signing in..."
              : "Sign In"}
          </button>

        </form>

      </div>

    </div>
  );
}

export default Login;