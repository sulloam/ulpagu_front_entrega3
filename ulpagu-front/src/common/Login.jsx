import { useState, useContext } from 'react';
import axios from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';
import { AuthContext } from '../context/AuthContext';

function Login() {
  const [correo, setCorreo] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();
  const { login } = useContext(AuthContext);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post('/usuarios/login', {
        correo,
        contraseña,
      });

      const { token, usuario } = response.data;

      // Guardamos el token y datos del usuario en el contexto
      login(token, usuario);

      setMensaje('✅ Sesión iniciada correctamente');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      console.error('Error al iniciar sesión:', err);
      setMensaje('❌ Credenciales inválidas o error en el servidor');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input
          type="email"
          value={correo}
          onChange={e => setCorreo(e.target.value)}
          placeholder="Correo"
          required
        />
        <input
          type="password"
          value={contraseña}
          onChange={e => setContraseña(e.target.value)}
          placeholder="Contraseña"
          required
        />
        <button type="submit">Ingresar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

export default Login;
