import { BrowserRouter, Routes, Route } from "react-router-dom";
import App from "./App";
import Nosotros from "./Nosotros.jsx";
import Instructions from "./Instructions";
import Register from "./Register";
import Login from "./Login";
import PrivateRoute from "../components/PrivateRoute";
import Jugar from "./Jugar";
import Perfil from "./Perfil";
import Historial from "./Historial";
import Amigos from "./Amigos";
import Usuarios from "./Usuarios"; // ✅ nueva importación

function Routing() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/instructions" element={<Instructions />} />
        <Route path="/nosotros" element={<Nosotros />} />

        {/* Rutas protegidas para cualquier usuario autenticado */}
        <Route
          path="/"
          element={
            <PrivateRoute>
              <App />
            </PrivateRoute>
          }
        />
        <Route
          path="/jugar"
          element={
            <PrivateRoute>
              <Jugar />
            </PrivateRoute>
          }
        />
        <Route
          path="/amigos"
          element={
            <PrivateRoute>
              <Amigos />
            </PrivateRoute>
          }
        />
        <Route
          path="/perfil"
          element={
            <PrivateRoute>
              <Perfil />
            </PrivateRoute>
          }
        />
        <Route
          path="/historial"
          element={
            <PrivateRoute>
              <Historial />
            </PrivateRoute>
          }
        />

        {/* 🔐 Ruta solo visible y accesible por admins */}
        <Route
          path="/usuarios"
          element={
            <PrivateRoute>
              <Usuarios />
            </PrivateRoute>
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default Routing;
