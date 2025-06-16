import { useState, useContext } from "react";
import axios from "../api/axiosInstance";
import { useNavigate, Link } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";
import { FaEye, FaEyeSlash } from "react-icons/fa";
import "./Login.css";

function Login() {
  const [correo, setCorreo] = useState("");
  const [contraseña, setContraseña] = useState("");
  const [mostrarClave, setMostrarClave] = useState(false);
  const [mensaje, setMensaje] = useState("");
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post("/usuarios/login", {
        correo,
        contraseña,
      });

      const { token, usuario } = response.data;
      login(token, usuario);

      setMensaje("✅ Sesión iniciada correctamente");
      setTimeout(() => navigate("/"), 1000);
    } catch (err) {
      console.error("Error al iniciar sesión:", err);
      setMensaje("❌ Credenciales inválidas o error en el servidor");
    }
  };

  return (
    <div className="login-container">
      <h1 className="titulo-juego">Truco Web</h1>

      <div className="login-card">
        <h2 className="login-titulo">Iniciar sesión</h2>

        <form onSubmit={handleSubmit} className="login-formulario">
          <input
            type="email"
            value={correo}
            onChange={(e) => setCorreo(e.target.value)}
            placeholder="Correo"
            required
          />

          <div className="input-password-wrapper">
            <input
              type={mostrarClave ? "text" : "password"}
              value={contraseña}
              onChange={(e) => setContraseña(e.target.value)}
              placeholder="Contraseña"
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

          <button type="submit">Ingresar</button>
        </form>

        {mensaje && <p className="login-mensaje">{mensaje}</p>}

        <p className="login-registro">
          ¿No tienes cuenta?{" "}
          <Link to="/register" className="login-link">
            Regístrate aquí
          </Link>
        </p>
      </div>
    </div>
  );
}

export default Login;
