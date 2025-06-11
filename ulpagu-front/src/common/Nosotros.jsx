import './Nosotros.css'

function Nosotros() {
  const creadores = [
    {
      nombre: 'Pedro Gutiérrez',
      descripcion: 'Estudiante de Ingeniería Civil UC. Mayor TI y Minor industrial. Entre mis intereses destacan el deporte, juego fútbol, escalo, juego pádel y tenis y subo harto cerros. Me gusta mucho la música también, razón por la que aprendí a mezclar (House).',
      imagen: '/pedro.jpeg'
    },
    {
      nombre: 'Lucas Palacios',
      descripcion: 'Especialista en experiencia de usuario y pruebas de juego.',
      imagen: '/pedro.jpeg'
    },
    {
      nombre: 'Sebastián Ulloa',
      descripcion: 'Encargado del backend y la lógica del juego.',
      imagen: '/pedro.jpeg'
    }
  ];

  return (
    <div className="nosotros-container">
      {creadores.map((c, i) => (
        <div className="creador" key={i}>
          <img src={c.imagen} alt={c.nombre} className="creador-img" />
          <h3>{c.nombre}</h3>
          <p>{c.descripcion}</p>
        </div>
      ))}
    </div>
  );
}

export default Nosotros;