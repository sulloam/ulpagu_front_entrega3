import { useContext, useEffect, useState } from "react";
import axios from "../api/axiosInstance";
import { AuthContext } from "../context/AuthContext";
import "./Amigos.css";
import { useNavigate } from "react-router-dom";


function Amigos() {
  const { usuario, token } = useContext(AuthContext);
  const navigate = useNavigate();
  const [idNuevoAmigo, setIdNuevoAmigo] = useState("");
  const [amistades, setAmistades] = useState([]);
  const [nombresUsuarios, setNombresUsuarios] = useState({});
  const [mensaje, setMensaje] = useState("");

  const headers = { Authorization: `Bearer ${token}` };

  const obtenerAmistades = async () => {
    try {
      const response = await axios.get("/amistad", { headers });
      setAmistades(response.data);

      const ids = response.data.flatMap((a) => {
        if (a.estado === "aceptada" && (a.id_usuario_1 === usuario.id || a.id_usuario_2 === usuario.id)) {
          return [a.id_usuario_1 === usuario.id ? a.id_usuario_2 : a.id_usuario_1];
        }
        if (a.estado === "pendiente" && a.id_usuario_2 === usuario.id) {
          return [a.id_usuario_1];
        }
        return [];
      });

      const idsUnicos = [...new Set(ids)];
      const nombres = {};

      await Promise.all(
        idsUnicos.map(async (id) => {
          try {
            const res = await axios.get(`/usuarios/${id}`, { headers });
            nombres[id] = res.data.nombre_usuario;
          } catch {
            nombres[id] = `Usuario ${id}`;
          }
        })
      );

      setNombresUsuarios(nombres);
    } catch (error) {
      console.error("Error al obtener amistades:", error);
      setMensaje("❌ Error al cargar amistades");
    }
  };

  const enviarSolicitud = async (e) => {
    e.preventDefault();
    const idAmigo = parseInt(idNuevoAmigo);

    if (idAmigo === usuario.id) {
      setMensaje("❌ No puedes agregarte a ti mismo");
      return;
    }

    const yaExiste = amistades.some((a) => {
      const esEstePar =
        (a.id_usuario_1 === usuario.id && a.id_usuario_2 === idAmigo) ||
        (a.id_usuario_2 === usuario.id && a.id_usuario_1 === idAmigo);
      return esEstePar && ["pendiente", "aceptada"].includes(a.estado);
    });

    if (yaExiste) {
      setMensaje("⚠️ Ya existe una amistad pendiente o aceptada con ese usuario");
      return;
    }

    try {
      await axios.post(
        "/amistad",
        {
          id_usuario_1: usuario.id,
          id_usuario_2: idAmigo,
          estado: "pendiente",
        },
        { headers }
      );
      setMensaje("✅ Solicitud enviada");
      setIdNuevoAmigo("");
      obtenerAmistades();
    } catch (error) {
      console.error("Error al enviar solicitud:", error);
      setMensaje("❌ No se pudo enviar la solicitud");
    }
  };

  const aceptarSolicitud = async (idAmistad) => {
    try {
      await axios.patch(`/amistad/${idAmistad}`, { estado: "aceptada" }, { headers });
      setMensaje("✅ Solicitud aceptada");
      obtenerAmistades();
    } catch (error) {
      console.error("Error al aceptar solicitud:", error);
      setMensaje("❌ No se pudo aceptar la solicitud");
    }
  };

  const rechazarSolicitud = async (idAmistad) => {
    try {
      await axios.patch(`/amistad/${idAmistad}`, { estado: "rechazada" }, { headers });
      setMensaje("❌ Solicitud rechazada");
      obtenerAmistades();
    } catch (error) {
      console.error("Error al rechazar solicitud:", error);
      setMensaje("❌ No se pudo rechazar la solicitud");
    }
  };

  useEffect(() => {
    obtenerAmistades();
  }, []);

  const amigos = amistades.filter(
    (a) =>
      a.estado === "aceptada" &&
      (a.id_usuario_1 === usuario.id || a.id_usuario_2 === usuario.id)
  );

  const solicitudesPendientes = amistades.filter(
    (a) => a.estado === "pendiente" && a.id_usuario_2 === usuario.id
  );

  return (
    <div className="amigos-container">
      <h1>Gestión de Amigos</h1>

      <form onSubmit={enviarSolicitud} className="formulario-amigos">
        <input
          type="number"
          value={idNuevoAmigo}
          onChange={(e) => setIdNuevoAmigo(e.target.value)}
          placeholder="ID del usuario"
          required
        />
        <button type="submit">Agregar Amigo</button>
      </form>

      {mensaje && <p className="mensaje">{mensaje}</p>}

      <h2>Solicitudes pendientes</h2>
      {solicitudesPendientes.length === 0 ? (
        <p>No tienes solicitudes nuevas</p>
      ) : (
        <ul>
          {solicitudesPendientes.map((solicitud) => {
            const idSolicitante = solicitud.id_usuario_1;
            const nombre = nombresUsuarios[idSolicitante] || `Usuario ${idSolicitante}`;
            return (
              <li key={solicitud.id}>
                Solicitud de: {nombre}
                <button onClick={() => aceptarSolicitud(solicitud.id)}>✅ Aceptar</button>
                <button onClick={() => rechazarSolicitud(solicitud.id)}>❌ Rechazar</button>
              </li>
            );
          })}
        </ul>
      )}

      <h2>Tus amigos</h2>
      {amigos.length === 0 ? (
        <p>No tienes amigos aún</p>
      ) : (
        <ul>
          {amigos.map((amistad) => {
            const amigoId =
              amistad.id_usuario_1 === usuario.id
                ? amistad.id_usuario_2
                : amistad.id_usuario_1;
            const nombre = nombresUsuarios[amigoId] || `Usuario ${amigoId}`;
            return <li key={amistad.id}>{nombre}</li>;
          })}
        </ul>
      )}
      <button onClick={() => navigate("/")}>🏠 Volver al menú principal</button>
    </div>
    
  );
}

export default Amigos;

