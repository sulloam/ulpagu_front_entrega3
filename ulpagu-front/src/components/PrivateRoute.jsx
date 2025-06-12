import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

function PrivateRoute({ children }) {
  const { token } = useContext(AuthContext); // ✅ usa el token directamente

  return token ? children : <Navigate to="/login" replace />;
}

export default PrivateRoute;

