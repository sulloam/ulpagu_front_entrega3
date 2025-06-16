// src/common/App.jsx
import "./App.css";
import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function App() {
  const navigate = useNavigate();
  const [fotoPerfil, setFotoPerfil] = useState(null);

  useEffect(() => {
    const guardada = localStorage.getItem("fotoPerfil");
    if (guardada) setFotoPerfil(guardada);
  }, []);

  return (
    <div className="app-container">
      <div className="profile-button">
        <button onClick={() => navigate("/perfil")} style={{ padding: 0 }}>
          {fotoPerfil ? (
            <img
              src={fotoPerfil}
              alt="Perfil"
              style={{
                width: "50px",
                height: "50px",
                borderRadius: "50%",
                objectFit: "cover",
                display: "block",
              }}
            />
          ) : (
            "👤"
          )}
        </button>
      </div>

      <div className="button-grid">
        <button onClick={() => navigate("/jugar")}>Jugar Partida</button>
        <button onClick={() => navigate("/amigos")}>Añadir Amigo</button>
        <button onClick={() => navigate("/historial")}>Ver Historial</button>
        <button onClick={() => navigate("/instructions")}>
          Reglas del Juego
        </button>
        <button onClick={() => navigate("/nosotros")}>Sobre Nosotros</button>
        <button onClick={() => navigate("/usuarios")}>Usuarios</button>{" "}
        {/* ✅ NUEVO */}
      </div>
    </div>
  );
}

export default App;
