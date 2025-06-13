import { useState } from "react";
import axios from "../api/axiosInstance";
import { useNavigate, Link } from "react-router-dom";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Register.css";

function Register() {
  const [correo, setCorreo] = useState("");
  const [nombreUsuario, setNombreUsuario] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [cartaFavorita, setCartaFavorita] = useState("");
  const [mostrarClave, setMostrarClave] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.post("/usuarios", {
        nombre_usuario: nombreUsuario,
        correo: correo,
        contraseña: contraseña,
        carta_favorita: cartaFavorita,
      });

      setMensaje("✅ Usuario registrado correctamente");
      setTimeout(() => navigate("/login"), 1500);
    } catch (err) {
      console.error(err);
      setMensaje("❌ Error al registrar usuario");
    }
  };

  return (
    <div className="register-container">
      <h1 className="titulo-juego">Truco Web</h1>

      <div className="register-card">
        <h2 className="register-titulo">Registro</h2>

        <form onSubmit={handleSubmit} className="register-formulario">
          <input
            type="email"
            placeholder="Correo"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            required
          />
          <input
            type="text"
            placeholder="Nombre de usuario"
            value={nombreUsuario}
            onChange={(e) => setNombreUsuario(e.target.value)}
            required
          />

          <div className="input-password-wrapper">
            <input
              type={mostrarClave ? "text" : "password"}
              placeholder="Contraseña"
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              required
              onPaste={(e) => e.preventDefault()}
            />
            <button
              type="button"
              className="ojo-toggle"
              onMouseDown={() => setMostrarClave(true)}
              onMouseUp={() => setMostrarClave(false)}
              onMouseLeave={() => setMostrarClave(false)}
            >
              {mostrarClave ? <FaEyeSlash /> : <FaEye />}
            </button>
          </div>

          <input
            type="text"
            placeholder="Carta favorita"
            value={cartaFavorita}
            onChange={(e) => setCartaFavorita(e.target.value)}
            required
          />

          <button type="submit">Registrarse</button>
        </form>

        {mensaje && <p className="register-mensaje">{mensaje}</p>}

        <p className="register-login">
          ¿Ya tienes cuenta?{" "}
          <Link to="/login" className="register-link">
            Inicia sesión aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Register;
