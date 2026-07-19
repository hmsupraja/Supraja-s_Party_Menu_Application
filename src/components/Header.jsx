import "./../styles/Header.css";
import { useNavigate } from "react-router-dom";
function Header(){
  const navigate=useNavigate();
  const handleLogout=()=>{
    localStorage.removeItem('isLoggedIn')
    navigate('/login');

  };

  return(
    <header className="header">
      <div className="header-content">
        <div >
          <h1>Party Menu Planner</h1>
          <p>Discover recipes for every celebration</p>

        </div>
        <button className="logout-btn" onClick={handleLogout}>
          Logout
        </button>
      </div>
    </header>
  );

}

export default Header