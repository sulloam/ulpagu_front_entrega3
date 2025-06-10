
import './App.css'
import { useNavigate } from 'react-router-dom'

function App() {
  const navigate = useNavigate();

  return (
    <div className="app-container">
      <div className="profile-button">
        <button onClick={() => navigate('/welcome')}>👤</button>
      </div>

      <div className="button-grid">
        <button onClick={() => navigate('/board')}>Jugar Partida</button>
        <button onClick={() => navigate('/friends')}>Añadir Amigo</button>
        <button onClick={() => navigate('/history')}>Ver Historial</button>
        <button onClick={() => navigate('/instructions')}>Reglas del Juego</button>
        <button onClick={() => navigate('/nosotros')}>Sobre Nosotros</button>
      </div>

    </div>
  )
}

export default App
