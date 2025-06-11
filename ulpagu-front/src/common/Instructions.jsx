import './Instructions.css'

function Instructions() {
  return (
    <main className="truco-page">
      <h1>Instrucciones del Truco</h1>

      <section>
        <h2>¿Qué es el Truco?</h2>
        <p>
          El Truco es un juego de cartas tradicional muy popular en Argentina, Uruguay y el sur de Chile. 
          Se juega con una baraja española de 40 cartas y combina estrategia, engaño y señas.
        </p>
      </section>

      <section>
        <h2>Cantidad de jugadores</h2>
        <p>Puede jugarse 1 vs 1, 2 vs 2 o en tríos. En equipos se permite el uso de señas.</p>
      </section>

      <section>
        <h2>Objetivo del juego</h2>
        <p>Sumar 15 o 30 puntos antes que el equipo rival, ganando manos y desafíos como el Truco y el Envido.</p>
      </section>

      <section>
        <h2>Acciones posibles</h2>
        <ul>
          <li><strong>Truco:</strong> Desafío que vale 2 puntos, puede escalar a Retruco y Vale Cuatro.</li>
          <li><strong>Envido:</strong> Apuesta basada en el valor de dos cartas del mismo palo.</li>
          <li><strong>Flor:</strong> Si tienes 3 cartas del mismo palo, se canta Flor (opcional según reglas).</li>
        </ul>
      </section>

      <section>
        <h2>Señas</h2>
        <p>
          En equipos, es común usar señas visuales (guiños, gestos) para comunicar jugadas. Están permitidas si no hay palabras.
        </p>
      </section>

      <section>
        <h2>Puntajes</h2>
        <ul>
          <li>Truco: 2 puntos (Retruco = 3, Vale Cuatro = 4)</li>
          <li>Envido: mínimo 2 puntos, puede escalar según apuestas</li>
          <li>Flor: 3 o más puntos (si se juega con Flor)</li>
        </ul>
      </section>

      <footer>
        <p><em>Estas instrucciones reflejan las reglas tradicionales del Truco rioplatense y patagónico.</em></p>
      </footer>
    </main>
  );
}

export default Instructions;

