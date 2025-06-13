import { useContext, useState, useEffect } from "react";
import { AuthContext } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Perfil.css";

function Perfil() {
  const { usuario, logout } = useContext(AuthContext);
  const [fotoPerfil, setFotoPerfil] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    const guardada = localStorage.getItem("fotoPerfil");
    if (guardada) setFotoPerfil(guardada);
  }, []);

  const handleFotoChange = (e) => {
    const archivo = e.target.files[0];
    if (!archivo) return;

    const lector = new FileReader();
    lector.onloadend = () => {
      const dataURL = lector.result;
      localStorage.setItem("fotoPerfil", dataURL);
      setFotoPerfil(dataURL);
    };
    lector.readAsDataURL(archivo);
  };

  const handleCerrarSesion = () => {
    setShowModal(true);
  };

  const confirmarCerrarSesion = () => {
    logout();
    navigate("/login");
  };

  const cancelarCerrarSesion = () => {
    setShowModal(false);
  };

  if (!usuario) return <p>Cargando datos del usuario...</p>;

  return (
    <div className="perfil-container">
      <div className="perfil-card">
        <div className="perfil-foto">
          {fotoPerfil ? (
            <img src={fotoPerfil} alt="Foto de perfil" />
          ) : (
            <span style={{ fontSize: "4rem" }}>👤</span>
          )}
        </div>

        <h2 className="perfil-h2">{usuario.nombre_usuario}</h2>
        <p className="perfil-info">
          <strong>Correo:</strong> {usuario.correo}
        </p>
        <p className="perfil-info">
          <strong>Carta favorita:</strong> {usuario.carta_favorita}
        </p>
        <p className="perfil-info">
          <strong>ID de usuario:</strong> {usuario.id}
        </p>

        <div className="perfil-subida">
          <input
            type="file"
            id="file-input"
            accept="image/*"
            onChange={handleFotoChange}
            style={{ display: "none" }}
          />
          <button onClick={() => document.getElementById("file-input").click()}>
            📁 Subir foto
          </button>
        </div>

        <div className="perfil-botones">
          <button className="volver" onClick={() => navigate("/")}>
            ⬅️ Volver a inicio
          </button>
          <button className="cerrar" onClick={handleCerrarSesion}>
            🚪 Cerrar sesión
          </button>
        </div>
      </div>

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-contenido">
            <p>¿Estás seguro de que quieres cerrar sesión?</p>
            <div className="modal-botones">
              <button className="confirmar" onClick={confirmarCerrarSesion}>
                Sí, cerrar sesión
              </button>
              <button className="cancelar" onClick={cancelarCerrarSesion}>
                Cancelar
              </button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}

export default Perfil;
