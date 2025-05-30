// firebase.js

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
