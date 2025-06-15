# Truco Web - Frontend

Este repositorio contiene la interfaz web del juego **Truco Argentino**, desarrollada en React.js. La aplicación permite a los usuarios registrarse, iniciar sesión, visualizar su perfil, jugar partidas, gestionar amigos y ver el historial, todo con una interfaz moderna y adaptada a la estética del juego de cartas.

---

En esta entrega, se incorporaron importantes mejoras visuales y funcionales respecto a la entrega anterior:

- 🔰 **Estilo coherente y temático**: se utilizó una paleta de colores basada en el verde oscuro y amarillo dorado, representativa de la estética tradicional del Truco.
- 🖼️ **Landing page (Inicio)**: incluye fondo personalizado con cartas españolas y botones estilizados distribuidos con CSS Grid.
- 🙋 **Perfil de usuario**:
  - Muestra nombre, correo, carta favorita e ID.
  - Permite subir una foto de perfil personalizada, almacenada localmente. Tiene un problema al almacenar la foto de cada usuario por separado, que será arreglado en la próxima entrega.
  - Interfaz centrada y contenida en un cuadro con diseño amigable.
- 🔐 **Login y Registro**:
  - Estilo similar al perfil, con fondo completo y caja centrada.
  - Validaciones de campos y mensajes de retroalimentación.
  - Opción de mostrar/ocultar contraseña con ícono de ojo.
  - Navegación entre login y registro vía enlaces amigables.
- 📖 **Página “Instrucciones”**:
  - Contiene todas las reglas oficiales del Truco Argentino y las personalizaciones implementadas en el juego.
- 🧑‍🤝‍🧑 **Página “Sobre Nosotros”**:
  - Presenta a los creadores del proyecto con fotos y descripciones.
  - Tarjetas estilizadas con fondo, sombras y bordes redondeados.
- 🤝 **Gestión de Amigos**:
  - Permite buscar amigos por su **ID de usuario**.
  - Las solicitudes pueden ser **aceptadas o rechazadas** desde la interfaz web.

---

## 🧠 Cambios en reglas y lógica implementados en frontend

- 👤 Identificación de cada jugador mediante su **nombre, ID y carta favorita**.
- 🎨 Mecanismo para que cada usuario suba su propia imagen de perfil.
- 🚪 Modal de confirmación al cerrar sesión (reemplazando `window.confirm` por un diseño personalizado).
- 🔐 En el **backend**, se implementó:
  - **Hasheo de contraseñas** utilizando `bcrypt`.
  - **Testing** de rutas y funciones clave con Jest.
  - **Autenticación segura con JWT**, validando tokens en rutas protegidas.

---

## 💡 Supuestos, restricciones y decisiones de diseño

- La imagen de fondo solo se carga en la **landing page**, no en otras vistas.
- Los IDs de usuario se muestran como forma de identificación cruzada para poder enviar solicitudes de amistad.

---

## 🛠️ Tecnologías utilizadas

- ⚛️ React.js (Vite)
- 📦 CSS Modules y estilos manuales
- 🧭 React Router DOM
- 💾 LocalStorage (para guardar foto de perfil)
- 🔐 Autenticación mediante JWT compartido desde backend

---

## 📂 Estructura relevante del proyecto

ulpagu-front/
└── src/
└── common/
├── App.jsx / App.css → Landing page con navegación principal
├── Amigos.jsx → Página de gestión de solicitudes de amistad por ID
├── Historial.jsx → Historial de partidas (por implementar)
├── Instructions.jsx / .css → Página de reglas del juego
├── Jugar.jsx → Página para iniciar partidas
├── Login.jsx / .css → Login de usuarios (estilizado, con toggle de contraseña)
├── Register.jsx / .css → Registro de usuarios
├── Perfil.jsx / .css → Perfil de usuario con foto, datos y cierre de sesión
├── Nosotros.jsx / .css → Página de créditos con los creadores del proyecto
├── Routing.jsx → Sistema de rutas de React
└── main.jsx → Punto de entrada de React
