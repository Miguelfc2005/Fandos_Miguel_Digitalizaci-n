🎥 Recomendador de Películas con IA
🔗 Ver Página en Vivo

Este proyecto de desarrollo web permite al usuario recibir recomendaciones de películas en función de dos criterios:

🎬 Género favorito (romántico, animación, ciencia ficción)

🙂 Estado de ánimo (feliz, triste o emocionado/a)

Utiliza una lógica simple de IA basada en condiciones y una base de datos en tiempo real con Firebase.

🌐 Tecnologías utilizadas
HTML5 – Estructura de la página

CSS3 – Estilos básicos y diseño responsive

JavaScript – Lógica de interacción y recomendación

Firebase Realtime Database – Almacenamiento y consulta de películas

🚀 ¿Cómo funciona?
El usuario selecciona un género y su estado de ánimo desde un formulario.

Al enviar, se consulta la base de datos de Firebase.

Si se encuentra una película que coincida con ambos criterios, se muestra como recomendación.

Si no se encuentra, se muestra un mensaje de "No encontramos una película para ti... 😔".

🧠 Lógica de IA (Basada en reglas)
javascript
Copiar
Editar
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
});
📁 Estructura del proyecto
bash
Copiar
Editar
📦 Recomendador-Peliculas
├── index.html       # Interfaz de usuario
├── firebase.js      # Configuración e integración con Firebase
└── README.md        # Documentación del proyecto
🛠 Cómo configurarlo
Crea un proyecto en Firebase

Activa Realtime Database en modo prueba.

Agrega películas a la base de datos con esta estructura:

json
Copiar
Editar
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
Clona el repositorio o abre el proyecto en tu navegador:

bash
Copiar
Editar
git clone https://github.com/tu-usuario/recomendador-peliculas.git
📷 Vista previa
![image](https://github.com/user-attachments/assets/6a853f8a-e47c-487c-840a-d6432f40b013)


⚠️ Notas de seguridad
Este proyecto es educativo. No uses tus claves de Firebase en producción sin protegerlas adecuadamente.

La lógica de IA es simple y basada en coincidencias exactas; no usa aprendizaje automático.

📄 Licencia
MIT License — Puedes usar, modificar y compartir libremente.
