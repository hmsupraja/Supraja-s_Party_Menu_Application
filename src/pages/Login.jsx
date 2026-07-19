import { useState } from "react";
import { useNavigate } from "react-router-dom";
function Login(){
    const [email,setEmail]=useState("");
    const [password,setPassword]=useState("");
    const [error,setError]=useState("");
    const navigate=useNavigate();
    const handleSubmit=(e)=>{
        e.preventDefault();
        if(
            email==='admin@example.com' &&
            password==='admin123'

        ){
            localStorage.setItem('isLoggedIn','true');
            navigate('/');
        }else{
            setError('Invalid Email or Password');
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