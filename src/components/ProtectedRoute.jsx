import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const token = localStorage.getItem("party_menu_token");

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return children;
}

export default ProtectedRoute;