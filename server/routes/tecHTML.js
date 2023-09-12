var express = require('express');
var router = express.Router();

// Función para generar una imagen aleatoria del instituto (puedes reemplazar esto con tu lógica)
function getRandomImage() {
  // Aquí puedes agregar lógica para seleccionar una imagen aleatoria
  var images = ['imagen1.jpg', 'imagen2.jpg', 'imagen3.jpg'];
  var randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

/* GET /about/tec - Página HTML con información del Tecnológico */
router.get('/', function (req, res, next) {
  // Crea una imagen aleatoria
  var randomImage = getRandomImage();

  // Definir la variable 'title' aquí
  var title = 'Tecnologico de Gustavo A Madero';

  // Renderiza una página HTML dinámica con la información del Tecnológico y la imagen aleatoria
  res.render('tec', {
    title: title,
    name: "Tecnologico de Gustavo A Madero",
    description: "Información sobre el Tecnológico",
    mission: "Nuestra misión es...",
    values: "Nuestros valores son...",
    image: randomImage
  });
});

module.exports = router;
