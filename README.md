# 🎥 Recomendador de Películas con IA

🔗 [Ver Página en Vivo](#) <!-- Añade aquí el enlace si lo tienes desplegado -->

---

## Descripción

Este proyecto web permite al usuario recibir recomendaciones de películas basadas en dos criterios:

- 🎬 **Género favorito:** romántico, animación, ciencia ficción.
- 🙂 **Estado de ánimo:** feliz, triste o emocionado/a.

Utiliza una lógica sencilla de IA basada en reglas (condiciones) para filtrar películas almacenadas en una base de datos en tiempo real con Firebase Realtime Database.

---

## Tecnologías utilizadas

- **HTML5:** Estructura de la página.
- **CSS3:** Estilos básicos y diseño responsive.
- **JavaScript:** Lógica de interacción y recomendación.
- **Firebase Realtime Database:** Almacenamiento y consulta de datos en tiempo real.

---

## ¿Cómo funciona?

1. El usuario selecciona un género y su estado de ánimo en el formulario.
2. Al enviar el formulario, la app consulta Firebase Realtime Database.
3. Se busca la primera película que coincida con ambos criterios.
4. Si se encuentra, se muestra la recomendación.
5. Si no, aparece un mensaje: "No encontramos una película para ti... 😔".

---

## Estructura del proyecto

📦 Recomendador-Peliculas
├── index.html # Interfaz de usuario (HTML + CSS)
├── firebase.js # Configuración e integración con Firebase (JS)
└── README.md # Documentación del proyecto

yaml
Copiar
Editar

---

## Cómo configurarlo y desplegarlo

1. Crea un proyecto en [Firebase](https://console.firebase.google.com/).

2. Activa **Realtime Database** en modo prueba (sin reglas de autenticación para desarrollo).

3. Inserta algunos datos de ejemplo en la base de datos con esta estructura JSON:

```json
{
  "peliculas": {
    "1": {
      "titulo": "Interstellar",
      "genero": "ciencia ficción",
      "mood": "emocionado"
    },
    "2": {
      "titulo": "Your Name",
      "genero": "romántico",
      "mood": "triste"
    }
  }
}
Clona este repositorio o descarga los archivos y abre index.html en tu navegador:

bash
Copiar
Editar
git clone https://github.com/tu-usuario/recomendador-peliculas.git
Abre index.html y usa la aplicación.

Código de conexión a Firebase (firebase.js)
js
Copiar
Editar
// Importa Firebase desde CDN
document.write('<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-app-compat.js"><\/script>');
document.write('<script src="https://www.gstatic.com/firebasejs/9.22.2/firebase-database-compat.js"><\/script>');

window.addEventListener('load', () => {
  // Configuración de Firebase
  const firebaseConfig = {
    apiKey: "AIzaSyCIUAtYPgPVKFAI57xIM9D4mERWZxdw4vY",
    authDomain: "recomendador-peliculas-9cd4c.firebaseapp.com",
    projectId: "recomendador-peliculas-9cd4c",
    storageBucket: "recomendador-peliculas-9cd4c.firebasestorage.app",
    messagingSenderId: "258770283348",
    appId: "1:258770283348:web:2c1d49fa85078a892eb6c1",
    measurementId: "G-HY51QXYY5S"
  };

  // Inicializa Firebase
  firebase.initializeApp(firebaseConfig);
  const database = firebase.database();

  const form = document.getElementById("formulario");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", function (event) {
    event.preventDefault();

    const genero = document.getElementById("genero").value;
    const mood = document.getElementById("mood").value;

    database.ref("peliculas").once("value", (snapshot) => {
      const data = snapshot.val();
      let recomendacion = null;

      for (let id in data) {
        const peli = data[id];
        if (peli.genero === genero && peli.mood === mood) {
          recomendacion = peli;
          break;
        }
      }

      if (recomendacion) {
        resultado.textContent = `Te recomendamos: "${recomendacion.titulo}"`;
      } else {
        resultado.textContent = "No encontramos una película para ti... 😔";
      }
    });
  });
});
Código HTML (index.html)
html
Copiar
Editar
<!DOCTYPE html>
<html lang="es">
<head>
  <meta charset="UTF-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1.0" />
  <title>Recomendador de Películas IA</title>
  <style>
    body {
      font-family: Arial, sans-serif;
      background: #f0f4f8;
      padding: 2rem;
      display: flex;
      flex-direction: column;
      align-items: center;
    }
    h1 {
      color: #333;
    }
    form {
      background: white;
      padding: 2rem;
      border-radius: 10px;
      box-shadow: 0 0 10px rgba(0,0,0,0.1);
      max-width: 400px;
      width: 100%;
    }
    label {
      display: block;
      margin-top: 1rem;
    }
    select, button {
      width: 100%;
      padding: 0.5rem;
      margin-top: 0.5rem;
    }
    #resultado {
      margin-top: 2rem;
      font-size: 1.2rem;
      color: #006400;
    }
  </style>
</head>
<body>
  <h1>Recomendador de Películas 🎥</h1>
  <form id="formulario">
    <label for="genero">¿Qué género prefieres?</label>
    <select id="genero">
      <option value="ciencia ficción">Ciencia Ficción</option>
      <option value="romántico">Romántico</option>
      <option value="animación">Animación</option>
    </select>

    <label for="mood">¿Cómo te sientes hoy?</label>
    <select id="mood">
      <option value="emocionado">Emocionado/a</option>
      <option value="triste">Triste</option>
      <option value="feliz">Feliz</option>
    </select>

    <button type="submit">Recomendar</button>
  </form>

  <div id="resultado"></div>

  <!-- Conexión al JS externo -->
  <script src="firebase.js"></script>
</body>
</html>
Capturas y vídeo de la app funcionando
(Incluye aquí capturas o enlaces a vídeos donde se vea la app funcionando con datos reales. Puedes usar grabaciones de pantalla mostrando selección de género, estado de ánimo y la recomendación obtenida.)

Dificultades encontradas y soluciones
Uso de Firebase: Al principio fue necesario aprender a integrar Firebase Realtime Database con una app web usando las versiones compatibles (compat.js).

Seguridad: La base de datos está en modo prueba para facilitar el desarrollo. En producción habría que configurar reglas y autenticación.

Lógica sencilla: La recomendación se basa en coincidencias exactas. Para mejorar, se podría usar aprendizaje automático o filtros más complejos.

Carga de scripts: Se usa document.write para cargar los scripts Firebase por simplicidad en este proyecto pequeño, pero en proyectos mayores se recomienda usar módulos o importación estándar.

Notas de seguridad
Este proyecto es educativo y no debe usarse en producción sin proteger las claves de Firebase.

Configura reglas de seguridad para evitar accesos no autorizados.

Licencia
MIT License — Puedes usar, modificar y compartir libremente.
