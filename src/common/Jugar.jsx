import { useContext, useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Jugar.css";

function Jugar() {
  const { usuario, token } = useContext(AuthContext);
  const headers = { Authorization: `Bearer ${token}` };
  const navigate = useNavigate();

  const [amistades, setAmistades] = useState([]);
  const [nombreUsuarios, setNombreUsuarios] = useState({});
  const [partidas, setPartidas] = useState([]);
  const [puntajeObjetivo, setPuntajeObjetivo] = useState(15);
  const [mensaje, setMensaje] = useState("");

  const cargarAmistades = async () => {
    try {
      const res = await axios.get("/amistad", { headers });

      const aceptadas = res.data.filter(
        (a) =>
          a.estado === "aceptada" &&
          (a.id_usuario_1 === usuario.id || a.id_usuario_2 === usuario.id)
      );

      setAmistades(aceptadas);

      const ids = aceptadas.map((a) =>
        a.id_usuario_1 === usuario.id ? a.id_usuario_2 : a.id_usuario_1
      );

      const nombres = {};

      await Promise.all(
        ids.map(async (id) => {
          try {
            const resUsuario = await axios.get(`/usuarios/${id}`, { headers });
            nombres[id] = resUsuario.data.nombre_usuario;
          } catch (error) {
            console.error(`Error cargando usuario con ID ${id}:`, error);
            nombres[id] = `Usuario ${id}`;
          }
        })
      );

      setNombreUsuarios(nombres);
    } catch (error) {
      console.error("Error al cargar amistades:", error);
    }
  };

  const cargarPartidas = async () => {
    try {
      const res = await axios.get("/partidas", { headers });
      const recibidas = res.data.filter(
        (p) => p.id_jugador_2 === usuario.id && p.estado === "pendiente"
      );
      setPartidas(recibidas);

      // Obtener nombres de jugadores si no están en el diccionario
      const nuevosIds = recibidas
        .map((p) => p.id_jugador_1)
        .filter((id) => !nombreUsuarios[id]);

      const nuevosNombres = { ...nombreUsuarios };
      await Promise.all(
        nuevosIds.map(async (id) => {
          try {
            const resUsuario = await axios.get(`/usuarios/${id}`, { headers });
            nuevosNombres[id] = resUsuario.data.nombre_usuario;
          } catch {
            nuevosNombres[id] = `Usuario ${id}`;
          }
        })
      );
      setNombreUsuarios(nuevosNombres);
    } catch (e) {
      console.error("Error al cargar partidas:", e);
    }
  };

  const invitarAmigo = async (idAmigo) => {
    if (idAmigo === usuario.id) {
      setMensaje("❌ No puedes jugar contigo mismo");
      return;
    }

    const jugadorEnTurno = Math.random() < 0.5 ? usuario.id : idAmigo;

    try {
      await axios.post(
        "/partidas",
        {
          id_jugador_1: usuario.id,
          id_jugador_2: idAmigo,
          puntaje_objetivo: puntajeObjetivo,
          estado: "pendiente",
          jugador_en_turno: jugadorEnTurno,
        },
        { headers }
      );
      setMensaje("✅ Invitación enviada");
      cargarPartidas();
    } catch (e) {
      console.error(
        "Error al crear partida:",
        e.response?.data.errors || e.response?.data || e.message
      );
      setMensaje("❌ No se pudo crear la partida");
    }
  };

  const aceptarPartida = async (id) => {
    try {
      await axios.post(`/partidas/${id}/iniciar`, {}, { headers });
      setMensaje("✅ Partida iniciada");
      cargarPartidas(); // refresca la lista
    } catch (e) {
      console.error("Error al iniciar partida:", e.response?.data || e.message);
      setMensaje("❌ No se pudo iniciar la partida");
    }
  };


  const rechazarPartida = async (id) => {
    try {
      await axios.patch(`/partidas/${id}`, { estado: "rechazada" }, { headers });
      setMensaje("❌ Partida rechazada");
      cargarPartidas();
    } catch (e) {
      setMensaje("❌ No se pudo rechazar la partida");
    }
  };

  useEffect(() => {
    cargarAmistades();
    cargarPartidas();
  }, []);

  return (
    <div className="jugar-container">
      <h1>Jugar una Partida</h1>

      <label htmlFor="puntaje">Puntaje objetivo:</label>
      <select
        id="puntaje"
        value={puntajeObjetivo}
        onChange={(e) => setPuntajeObjetivo(parseInt(e.target.value))}
      >
        <option value={6}>6 puntos</option>
        <option value={30}>30 puntos</option>
      </select>

      <h2>Tus amigos</h2>
      {amistades.length === 0 ? (
        <p>No tienes amigos aún</p>
      ) : (
        <ul>
          {amistades.map((a) => {
            const idAmigo =
              a.id_usuario_1 === usuario.id ? a.id_usuario_2 : a.id_usuario_1;
            const nombre = nombreUsuarios[idAmigo] || `Usuario ${idAmigo}`;
            return (
              <li key={a.id}>
                {nombre}
                <button onClick={() => invitarAmigo(idAmigo)}>
                  Invitar a jugar
                </button>
              </li>
            );
          })}
        </ul>
      )}

      {mensaje && <p className="mensaje">{mensaje}</p>}

      <h2>Solicitudes recibidas</h2>
      {partidas.length === 0 ? (
        <p>No tienes partidas pendientes</p>
      ) : (
        <ul>
          {partidas.map((p) => {
            const idRemitente = p.id_jugador_1;
            const nombre = nombreUsuarios[idRemitente] || `Usuario ${idRemitente}`;
            return (
              <li key={p.id}>
                Invitación de: {nombre} ({p.puntaje_objetivo} puntos)
                <button onClick={() => aceptarPartida(p.id)}>✅ Aceptar</button>
                <button onClick={() => rechazarPartida(p.id)}>❌ Rechazar</button>
              </li>
            );
          })}
        </ul>
      )}

      <button onClick={() => navigate("/")}>🏠 Volver al menú principal</button>
    </div>
  );
}

export default Jugar;
