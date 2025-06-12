import { useState } from 'react';
import axios from '../api/axiosInstance';
import { useNavigate } from 'react-router-dom';

function Register() {
  const [correo, setCorreo] = useState('');
  const [nombreUsuario, setNombreUsuario] = useState('');
  const [contraseña, setContraseña] = useState('');
  const [cartaFavorita, setCartaFavorita] = useState('1 de espadas');
  const [mensaje, setMensaje] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const res = await axios.post('/usuarios', {
        nombre_usuario: nombreUsuario,
        correo: correo,
        contraseña_hash: contraseña,
        carta_favorita: cartaFavorita
      });

      setMensaje('✅ Usuario registrado correctamente');

      // Redirige al login después de 1.5 segundos
      setTimeout(() => navigate('/login'), 1500);
    } catch (err) {
      console.error(err);
      setMensaje('❌ Error al registrar usuario');
    }
  };

  return (
    <div style={{ padding: '2rem' }}>
      <h2>Registro</h2>
      <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: '1rem', maxWidth: '300px' }}>
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
        <input
          type="password"
          placeholder="Contraseña"
          value={contraseña}
          onChange={(e) => setContraseña(e.target.value)}
          required
        />
        <input
          type="text"
          placeholder="Carta favorita"
          value={cartaFavorita}
          onChange={(e) => setCartaFavorita(e.target.value)}
          required
        />
        <button type="submit">Registrarse</button>
      </form>
      <p style={{ marginTop: '1rem' }}>{mensaje}</p>
    </div>
  );
}

export default Register;

