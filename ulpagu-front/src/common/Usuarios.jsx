import { useEffect, useState, useContext } from "react";
import axios from "../api/axiosInstance";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Usuarios.css";

function Usuarios() {
  const { token } = useContext(AuthContext);
  const [usuarios, setUsuarios] = useState([]);
  const [error, setError] = useState("");
  const navigate = useNavigate();

  useEffect(() => {
    const fetchUsuarios = async () => {
      if (!token) return;

      try {
        const response = await axios.get("/usuarios", {
          headers: {
            Authorization: `Bearer ${token}`,
          },
        });
        setUsuarios(response.data);
      } catch (err) {
        console.error(err);
        if (err.response?.status === 403) {
          setError("No tienes permiso para ver esta página (solo admins).");
        } else {
          setError("No se pudieron cargar los usuarios.");
        }
      }
    };

    fetchUsuarios();
  }, [token]);

  if (!token) return <p>Cargando autenticación...</p>;

  if (error) {
    return (
      <div className="usuarios-page">
        <h2>Lista de Usuarios</h2>
        <p className="error">{error}</p>
        <button onClick={() => navigate("/")}>⬅️ Volver al inicio</button>
      </div>
    );
  }

  return (
    <div className="usuarios-page">
      <h2>Lista de Usuarios</h2>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Nombre de Usuario</th>
            <th>Correo</th>
            <th>Rol</th>
            <th>Carta Favorita</th>
          </tr>
        </thead>
        <tbody>
          {usuarios.map((u) => (
            <tr key={u.id}>
              <td>{u.id}</td>
              <td>{u.nombre_usuario}</td>
              <td>{u.correo}</td>
              <td>{u.rol}</td>
              <td>{u.carta_favorita}</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button onClick={() => navigate("/")}>⬅️ Volver al inicio</button>
    </div>
  );
}

export default Usuarios;
