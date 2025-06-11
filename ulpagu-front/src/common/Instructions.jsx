import "./Instructions.css";

function Instructions() {
  return (
    <main className="truco-page">
      <h1>Reglas del Truco Argentino</h1>

      <section>
        <h2>1. Objetivo del juego</h2>
        <p>
          El servidor dará por terminada una partida cuando un jugador alcance
          el puntaje objetivo (30 o 45 puntos), según la configuración inicial
          de la partida.
        </p>
      </section>

      <section>
        <h2>2. Reparto de cartas</h2>
        <p>
          El servidor repartirá 3 cartas únicas a cada jugador al inicio de cada
          mano. No debe haber cartas repetidas entre jugadores ni en la mano de
          un mismo jugador. Se usará una baraja española de 40 cartas: del 1 al
          7, y del 10 al 12 (Se excluyen 8 y 9 de la baraja).
        </p>
      </section>

      <section>
        <h2>3. Jerarquía de cartas</h2>
        <ol>
          <li>Ancho de espadas (1 de espadas)</li>
          <li>Ancho de bastos (1 de bastos)</li>
          <li>Siete de espadas</li>
          <li>Siete de oro</li>
          <li>Treses (Todos)</li>
          <li>Doses (Todos)</li>
          <li>Unos (copas u oro)</li>
          <li>Doces (Todos)</li>
          <li>Onces (Todos)</li>
          <li>Dieces (Todos)</li>
          <li>Sietes (copas o bastos)</li>
          <li>Seises (Todos)</li>
          <li>Cincos (Todos)</li>
          <li>Cuatros (Todos)</li>
        </ol>
      </section>

      <section>
        <h2>4. Funcionamiento del juego</h2>
        <p>
          Al principio se sortea quién es mano. Cada jugador tira cartas por
          turnos. El primero que gana 2 manos, gana la ronda.
        </p>
        <ul>
          <li>
            Empate en la primera: gana quien gane una de las siguientes dos.
          </li>
          <li>Empate en la tercera: gana quien ganó la primera.</li>
          <li>Empate total: gana el jugador mano.</li>
        </ul>
      </section>

      <section>
        <h2>5. Envido</h2>
        <p>
          Se juega solo en la primera mano, antes del Truco. Gana quien tenga 2
          cartas del mismo palo que sumen más (agregando 20).
        </p>
        <ul>
          <li>10, 11 y 12 valen 0.</li>
          <li>La máxima es 33 (7 + 6 + 20).</li>
          <li>Si nadie tiene 2 del mismo palo, gana la carta más alta.</li>
        </ul>
        <p>
          <strong>Tabla de puntajes del Envido:</strong>
        </p>
        <table>
          <thead>
            <tr>
              <th>Apuesta</th>
              <th>No quiero</th>
              <th>Quiero</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>Envido</td>
              <td>1 punto</td>
              <td>2 puntos</td>
            </tr>
            <tr>
              <td>Real envido</td>
              <td>1 punto</td>
              <td>3 puntos</td>
            </tr>
            <tr>
              <td>Envido + Envido</td>
              <td>2 puntos</td>
              <td>4 puntos</td>
            </tr>
            <tr>
              <td>Envido + Real Envido</td>
              <td>2 puntos</td>
              <td>5 puntos</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>6. Truco</h2>
        <p>
          Se puede cantar en cualquier momento. Se responde con "Quiero", "No
          quiero", "Retruco" o "Vale Cuatro".
        </p>
        <p>
          <strong>Tabla de puntajes del Truco:</strong>
        </p>
        <table>
          <thead>
            <tr>
              <th>Apuesta</th>
              <th>Puntos</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>No hay apuesta</td>
              <td>1 punto al ganador de la ronda</td>
            </tr>
            <tr>
              <td>Truco</td>
              <td>2 puntos</td>
            </tr>
            <tr>
              <td>Retruco</td>
              <td>3 puntos</td>
            </tr>
            <tr>
              <td>Vale cuatro</td>
              <td>4 puntos</td>
            </tr>
          </tbody>
        </table>
      </section>

      <section>
        <h2>7. Flor</h2>
        <p>
          Tres cartas del mismo palo. Suma sus valores + 20. Anula el envido.
          Puede contrarrestarse con "Contra flor".
        </p>
      </section>

      <section>
        <h2>8. El Mazo</h2>
        <p>
          Un jugador puede rendirse diciendo "me voy al mazo". El rival suma los
          puntos correspondientes.
        </p>
      </section>

      <section>
        <h2>9. Cantar y responder</h2>
        <p>
          Solo puede haber una apuesta activa a la vez. El servidor debe
          bloquear nuevas acciones hasta que la actual se resuelva.
        </p>
      </section>

      <section>
        <h2>10. Mentir está permitido</h2>
        <p>
          El engaño verbal está permitido. Pero el servidor evalúa las cartas
          reales al resolver.
        </p>
      </section>

      <section>
        <h2>11. Reglas Nuevas - Propias</h2>

        <h3>1. Ruleta Mágica</h3>
        <p>
          Cada 10 puntos se obtiene el poder “Ruleta Mágica”, que otorga uno de
          los siguientes efectos aleatorios:
        </p>
        <ol>
          <li>
            <strong>Terremoto:</strong> Tirar un dado y restarle ese número al
            puntaje del rival.
          </li>
          <li>
            <strong>Cambio de carta:</strong> Cambiar una carta en mano por una
            al azar del mazo.
          </li>
          <li>
            <strong>Más envido:</strong> +5 puntos a tu envido si lo cantas.
          </li>
          <li>
            <strong>Escudo de Truco:</strong> Si pierdes el truco, solo pierdes
            1 punto (como si dijeras “No quiero”).
          </li>
          <li>
            <strong>Mute:</strong> El rival no puede cantar envido ni truco esa
            mano.
          </li>
          <li>
            <strong>Espía:</strong> Puedes ver una carta al azar del rival.
          </li>
          <li>
            <strong>Robar truco:</strong> Si el rival canta truco, puedes
            “robárselo” y tomar la iniciativa.
          </li>
          <li>
            <strong>No hay mano:</strong> En empates, ganas la ronda aunque no
            seas mano.
          </li>
          <li>
            <strong>Cambio de turno:</strong> Obliga al rival a jugar primero,
            incluso si no le corresponde.
          </li>
          <li>
            <strong>Congelar dado:</strong> El rival no puede usar su dado la
            próxima vez.
          </li>
          <li>
            <strong>Envido secreto:</strong> Puedes ocultar tu envido hasta el
            final de la ronda.
          </li>
          <li>
            <strong>Multiplicar jugada:</strong> Todos los puntos obtenidos en
            esa ronda se duplican.
          </li>
        </ol>

        <h3>2. Premio por mentiroso</h3>
        <p>
          Si ganas dos envidos seguidos sin tener envido 25 o mayor, ganas un
          comodín para bloquear un envido rival sin perder puntos.
        </p>

        <h3>3. Premio por agresivo</h3>
        <p>
          Si cantas truco tres rondas seguidas antes que el rival, obtienes un
          comodín que bloquea un truco del rival sin penalización.
        </p>

        <h3>4. Carta más baja ("¡Ciego!")</h3>
        <p>
          En la primera mano de cada ronda puedes cantar{" "}
          <strong>"¡Ciego!"</strong> para iniciar un juego paralelo donde gana
          quien tenga la carta más baja:
        </p>
        <ul>
          <li>
            <strong>Se canta "¡Ciego!" y no se acepta:</strong> +1 punto para
            quien lo cantó.
          </li>
          <li>
            <strong>Se canta "¡Ciego!" y se acepta:</strong> 2 puntos para quien
            tenga la carta más baja.
          </li>
          <li>
            <strong>Se sube a "¡Nací ciego!":</strong> Si no se acepta, gana 2
            puntos el que subió. Si se acepta, el ganador obtiene 3 puntos.
          </li>
          <li>
            <strong>Se sube a "¡Stevie Wonder!":</strong> Si no se acepta, se
            ganan los puntos anteriores. Si se acepta, el ganador obtiene 4
            puntos.
          </li>
        </ul>
      </section>

      <footer>
        <p>
          <em>
            Estas reglas están basadas en el tradicional juego Truco de la
            Patagonia argentina.
          </em>
        </p>
      </footer>
    </main>
  );
}

export default Instructions;
