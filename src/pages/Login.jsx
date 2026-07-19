import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const [loading, setLoading] = useState(false);
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");
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
      setLoading(false);
    }
  } catch (error) {
    setLoading(false);
    setError("Something went wrong. Please try again.");
  }
};
    return (
  <div className="login-container">
    <div className="login-card">

      <h1 className="logo">🍽️ Party Menu</h1>

      <p className="subtitle">
        Sign in to explore our delicious menu
      </p>

      <form onSubmit={handleSubmit}>

        <input
          type="email"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />

        <input
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          required
        />

        {error && (
          <p className="error">{error}</p>
        )}

        <button
          type="submit"
          disabled={loading}
        >
          {loading ? "Signing in..." : "Sign In"}
        </button>

      </form>

    </div>
  </div>
);
}
export default Login;