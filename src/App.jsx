import { Routes, Route, Navigate } from "react-router-dom";

import Login from "./pages/Login";
import Home from "./pages/Home";
import RecipeDetails from "./pages/RecipeDetails";
import SavedRecipes from "./pages/SavedRecipes";
import NotFound from "./pages/NotFound";

import ProtectedRoute from "./components/ProtectedRoute";

function App() {
  const token = localStorage.getItem("party_menu_token");

  return (
    <Routes>

      <Route
        path="/signin"
        element={
          token ? (
            <Navigate to="/" replace />
          ) : (
            <Login />
          )
        }
      />

      <Route
        path="/"
        element={
          <ProtectedRoute>
            <Home />
          </ProtectedRoute>
        }
      />

      <Route
        path="/menu/:id"
        element={<RecipeDetails />}
      />

      <Route
        path="/saved-recipes"
        element={<SavedRecipes />}
      />

      <Route
        path="*"
        element={<NotFound />}
      />

    </Routes>
  );
}

export default App;