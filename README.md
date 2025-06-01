## Link Página
https://miguelfc2005.github.io/Fandos_Miguel_Digitalizaci-n/

# 🎥 Recomendador de Películas con IA

Este es un proyecto de desarrollo web que utiliza una inteligencia artificial sencilla para recomendar películas en función de dos criterios:

- Género favorito del usuario.
- Estado de ánimo actual.


## 🌐 Tecnologías utilizadas

- **HTML5**: Para la estructura de la página.
- **CSS3**: Para los estilos.
- **JavaScript**: Para la lógica y simulación de IA.
- **IA básica**: Implementación basada en reglas (condiciones) para seleccionar una película de una lista.
  

## 🚀 ¿Cómo funciona?

1. El usuario selecciona un género de película (romántico, animación, ciencia ficción).
2. También elige cómo se siente (feliz, triste o emocionado/a).
3. Al hacer clic en el botón “Recomendar”, se ejecuta una función que analiza ambas respuestas.
4. Se muestra una película adecuada según una lista predefinida.



## 📁 Archivos del proyecto

- `index.html` → Página principal con HTML, CSS y JS integrados.
- `README.md` → Este documento con toda la explicación.


## 📷 Vista previa
![Captura](file:///home/daw/Im%C3%A1genes/Capturas%20de%20pantalla/Captura%20desde%202025-04-07%2009-47-54.png)



## 🧠 Lógica de IA

Se usa una lista de películas con `género` y `estado de ánimo`, y se busca coincidencias exactas usando `find()` en JavaScript:

```js
const recomendacion = peliculas.find(
  (peli) => peli.genero === genero && peli.mood === mood
);
