import { useContext, useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Historial.css";

function Historial() {
  const { usuario, token } = useContext(AuthContext);
  const headers = { Authorization: `Bearer ${token}` };
  const navigate = useNavigate();

  const [partidas, setPartidas] = useState([]);
  const [nombreUsuarios, setNombreUsuarios] = useState({});
  const [mensaje, setMensaje] = useState("");

  const cargarPartidas = async () => {
    try {
      const res = await axios.get("/partidas", { headers });

      const relevantes = res.data.filter(
        (p) =>
          (p.id_jugador_1 === usuario.id || p.id_jugador_2 === usuario.id) &&
          (p.estado === "activa" || p.estado === "finalizada")
      );

      setPartidas(relevantes);

      const ids = relevantes.map((p) =>
        p.id_jugador_1 === usuario.id ? p.id_jugador_2 : p.id_jugador_1
      );

      const nombres = {};
      await Promise.all(
        ids.map(async (id) => {
          if (!nombreUsuarios[id]) {
            try {
              const resUsuario = await axios.get(`/usuarios/${id}`, { headers });
              nombres[id] = resUsuario.data.nombre_usuario;
            } catch {
              nombres[id] = `Usuario ${id}`;
            }
          }
        })
      );

      setNombreUsuarios((prev) => ({ ...prev, ...nombres }));
    } catch (error) {
      console.error("Error al cargar historial:", error);
      setMensaje("❌ Error al cargar historial");
    }
  };

  useEffect(() => {
    cargarPartidas();
  }, []);

  return (
    <div className="historial-container">
      <h1>Historial de Partidas</h1>

      {mensaje && <p className="mensaje">{mensaje}</p>}

      {partidas.length === 0 ? (
        <p>No has jugado partidas aún.</p>
      ) : (
        <ul>
          {partidas.map((p) => {
            const rivalId =
              p.id_jugador_1 === usuario.id ? p.id_jugador_2 : p.id_jugador_1;
            const nombre = nombreUsuarios[rivalId] || `Usuario ${rivalId}`;
            return (
              <li key={p.id}>
                Contra: <strong>{nombre}</strong> | Estado: <em>{p.estado}</em> | Puntaje: {p.puntaje_objetivo}
              </li>
            );
          })}
        </ul>
      )}

      <button onClick={() => navigate("/")}>🏠 Volver al menú principal</button>
    </div>
  );
}

export default Historial;
