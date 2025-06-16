import "./Instructions.css";

function Instructions() {
  return (
    <main className="truco-page">
      <h1>Reglas del Truco Argentino</h1>

      <section>
        <h2>1. Objetivo del juego</h2>
        <p>
          Se dará por terminada una partida cuando un jugador alcance el puntaje
          objetivo (30 o 45 puntos), según la configuración inicial de la
          partida.
        </p>
      </section>

      <section>
        <h2>2. Reparto de cartas</h2>
        <p>
          El servidor repartirá 3 cartas únicas a cada jugador al inicio de cada
          mano. No habrán cartas repetidas entre jugadores ni en la mano de un
          mismo jugador. Se usará una baraja española de 40 cartas: del 1 al 7,
          y del 10 al 12 (Se excluyen 8 y 9 de la baraja).
        </p>
      </section>

      <section>
        <h2>3. Jerarquía de cartas</h2>
        <h4>1. Ancho de espadas (1 de espadas)</h4>
        <h4>2. Ancho de bastos (1 de bastos)</h4>
        <h4>3. Siete de espadas</h4>
        <h4>4. Siete de oro</h4>
        <h4>5. Treses (Todos)</h4>
        <h4>6. Doses (Todos)</h4>
        <h4>7. Unos (copas u oro)</h4>
        <h4>8. Doces (Todos)</h4>
        <h4>9. Onces (Todos)</h4>
        <h4>10. Dieces (Todos)</h4>
        <h4>11. Sietes (copas o bastos)</h4>
        <h4>12. Seises (Todos)</h4>
        <h4>13. Cincos (Todos)</h4>
        <h4>14. Cuatros (Todos)</h4>
      </section>

      <section>
        <h2>4. Funcionamiento del juego</h2>
        <p>
          Al principio se sortea quién es mano. Cada jugador tira cartas por
          turnos. El primero que gana 2 manos, gana la ronda.
        </p>
        <h4>
          - Empate en la primera: Gana quien gane una de las siguientes dos.
        </h4>
        <h4>- Empate en la tercera: Gana quien ganó la primera.</h4>
        <h4>- Empate total: Gana el jugador mano.</h4>
      </section>

      <section>
        <h2>5. Envido</h2>
        <p>
          Se juega solo en la primera mano, antes del Truco. Gana quien tenga 2
          cartas del mismo palo que sumen más (agregando 20).
        </p>
        <h4>- 10, 11 y 12 valen 0.</h4>
        <h4>- El puntaje máximo es 33 (7 + 6 + 20).</h4>
        <h4>- Si nadie tiene 2 del mismo palo, gana la carta más alta.</h4>

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
        <h2>7. El Mazo</h2>
        <p>
          Un jugador puede rendirse diciendo "me voy al mazo". El rival suma los
          puntos correspondientes.
        </p>
      </section>

      <section>
        <h2>8. Cantar y responder</h2>
        <p>
          Solo puede haber una apuesta activa a la vez. El servidor debe
          bloquear nuevas acciones hasta que la actual se resuelva.
        </p>
      </section>

      <section>
        <h2>9. Mentir está permitido</h2>
        <p>
          El engaño verbal está permitido. Pero el servidor evalúa las cartas
          reales al resolver.
        </p>
      </section>

      <section>
        <h2>10. Reglas Nuevas - Propias</h2>

        <h3>1. Ruleta Mágica</h3>
        <p>
          Cada 10 puntos se obtiene el poder “Ruleta Mágica”, que otorga uno de
          los siguientes efectos aleatorios:
        </p>

        <h4>a. Terremoto</h4>
        <p>Tirar un dado y restarle ese número al puntaje del rival.</p>

        <h4>b. Cambio de carta</h4>
        <p>Cambiar una carta en mano por una al azar del mazo.</p>

        <h4>c. Más envido</h4>
        <p>+5 puntos a tu envido si lo cantas.</p>

        <h4>d. Escudo de Truco</h4>
        <p>
          Si pierdes el truco, solo pierdes 1 punto (como si dijeras “No
          quiero”).
        </p>

        <h4>e. Mute</h4>
        <p>El rival no puede cantar envido ni truco esa mano.</p>

        <h4>f. Espía</h4>
        <p>Puedes ver una carta al azar del rival.</p>

        <h4>g. Robar truco</h4>
        <p>
          Si el rival canta truco, puedes “robárselo” y tomar la iniciativa.
        </p>

        <h4>h. No hay mano</h4>
        <p>En empates, ganas la ronda aunque no seas mano.</p>

        <h4>i. Cambio de turno</h4>
        <p>Obliga al rival a jugar primero, incluso si no le corresponde.</p>

        <h4>j. Congelar dado</h4>
        <p>El rival no puede usar su dado la próxima vez.</p>

        <h4>k. Envido secreto</h4>
        <p>Puedes ocultar tu envido hasta el final de la ronda.</p>

        <h4>l. Multiplicar jugada</h4>
        <p>Todos los puntos obtenidos en esa ronda se duplican.</p>

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
          En la primera mano de cada ronda puedes cantar "¡Ciego!" para iniciar
          un juego paralelo donde gana quien tenga la carta más baja:
        </p>

        <h4>
          - Se canta "¡Ciego!" y no se acepta: +1 punto para quien lo cantó.
        </h4>

        <h4>
          - Se canta "¡Ciego!" y se acepta: 2 puntos para quien tenga la carta
          más baja.
        </h4>

        <h4>
          - Se sube a "¡Nací ciego!": Si no se acepta, gana 2 puntos el que
          subió. Si se acepta, el ganador obtiene 3 puntos.
        </h4>

        <h4>
          - Se sube a "¡Stevie Wonder!": Si no se acepta, se ganan los puntos
          anteriores. Si se acepta, el ganador obtiene 4 puntos.
        </h4>
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
