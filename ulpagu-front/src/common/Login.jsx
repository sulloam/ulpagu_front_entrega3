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
      const res = await axios.post('/usuarios/login', {
    
        correo: correo,
        contraseña: contraseña
      });
      console.log('Respuesta del backend:', res.data);

      // Ajusta esto a lo que devuelva tu backend
      const token = res.data.token;
      const usuario = res.data.usuario;

      login(token, usuario); // 👈 usa el contexto

      setMensaje('✅ Sesión iniciada correctamente');
      setTimeout(() => navigate('/'), 1000);
    } catch (err) {
      console.error(err);
      setMensaje('❌ Error al iniciar sesión');
    }
  };

  return (
    <div>
      <h2>Iniciar sesión</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" value={correo} onChange={e => setCorreo(e.target.value)} placeholder="Correo" required />
        <input type="password" value={contraseña} onChange={e => setContraseña(e.target.value)} placeholder="Contraseña" required />
        <button type="submit">Ingresar</button>
      </form>
      <p>{mensaje}</p>
    </div>
  );
}

export default Login;
