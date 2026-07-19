import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const navigate=useNavigate();
    const handleSubmit = async (e) => {
  e.preventDefault();
  setError("");

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
};
    return (
        <div className="login-container">
            <h1>Party Menu Login</h1>
            <form onSubmit={handleSubmit}>
                <input type='email'
                placeholder="Email"
                value={email}
                onChange={(e)=>setEmail(e.target.value)}
                />
                <input type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}
                />
                {error && <p>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
}
export default Login;