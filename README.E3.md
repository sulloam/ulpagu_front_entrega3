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

## 👮‍♂️ Gestión de roles: Administrador vs Usuario normal

Se incorporó un sistema de **distinción entre usuarios normales y administradores**, tanto a nivel visual como funcional:

- 🔐 **Protección desde el backend**:
  - Las rutas sensibles (como `/usuarios`) están protegidas con middleware que verifica si el usuario autenticado tiene rol `admin`.
- 📋 **Vista exclusiva para administradores**:
  - En la landing page se implementó el botón Usuarios. Para administradores, muestra una tabla completa con todos los usuarios del sistema, incluyendo ID, nombre, correo, rol y carta favorita.
  - Si un usuario no administrador intenta acceder, se muestra un mensaje de error y un botón para volver a la landing page.
- ✅ **Estilo visual consistente y scroll automático**:
  - Se encapsularon los estilos para evitar que los cambios en `Usuarios.css` afecten otras vistas como `Instructions`.

Este sistema permite una escalabilidad futura del juego, habilitando acciones exclusivas para administradores como moderación, edición o análisis de usuarios.

---

## 💡 Supuestos, restricciones y decisiones de diseño

- La imagen de fondo solo se carga en la **landing page**, no en otras vistas.
- Los IDs de usuario se muestran como forma de identificación cruzada para poder enviar solicitudes de amistad.
- Las fotos de perfil se almacenan localmente por usuario (en localStorage), lo cual puede causar que no se compartan entre sesiones o dispositivos.

---

## 🛠️ Tecnologías utilizadas

- ⚛️ React.js (Vite)
- 📦 CSS Modules y estilos manuales
- 🧭 React Router DOM
- 💾 LocalStorage (para guardar foto de perfil)
- 🔐 Autenticación mediante JWT compartido desde backend

---

## 📂 Estructura relevante del proyecto

```
ulpagu-front/
└── src/
    ├── App.jsx / App.css         → Landing page con navegación principal
    ├── Amigos.jsx                → Página de gestión de solicitudes de amistad por ID
    ├── Historial.jsx             → Historial de partidas (por implementar)
    ├── Instructions.jsx / .css   → Página de reglas del juego
    ├── Jugar.jsx                 → Página para iniciar partidas
    ├── Login.jsx / .css          → Login de usuarios (estilizado, con toggle de contraseña)
    ├── Register.jsx / .css       → Registro de usuarios
    ├── Perfil.jsx / .css         → Perfil de usuario con foto, datos y cierre de sesión
    ├── Nosotros.jsx / .css       → Página de créditos con los creadores del proyecto
    ├── Usuarios.jsx / .css       → Vista exclusiva para administradores (ver todos los usuarios)
    ├── AdminRoute.jsx            → Ruta protegida para vistas exclusivas de administradores
    ├── PrivateRoute.jsx          → Ruta protegida para usuarios autenticados
    ├── Routing.jsx               → Sistema de rutas de React
    └── main.jsx                  → Punto de entrada de React
```

---
