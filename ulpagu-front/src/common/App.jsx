
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="profile-button">
        <button onClick={() => navigate('/perfil')}>👤</button>
      </div>

      <div className="button-grid">
        <button onClick={() => navigate('/jugar')}>Jugar Partida</button>
        <button onClick={() => navigate('/amigos')}>Añadir Amigo</button>
        <button onClick={() => navigate('/historial')}>Ver Historial</button>
        <button onClick={() => navigate('/instructions')}>Reglas del Juego</button>
        <button onClick={() => navigate('/nosotros')}>Sobre Nosotros</button>
      </div>

    </div>
  )
}

export default App
