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
  var title = 'Tecno de Gustavo A Madero';

  // Renderiza una página HTML dinámica con la información del Tecnológico y la imagen aleatoria
  res.render('tec', {
    title: title,
    name: "Tec de Gustavo A Madero",
    description: "Información sobre el Tecnológico",
    mission: "Nuestra misión es...",
    values: "Nuestros valores son...",
    image: randomImage
  });
});

/* GET /about/api/tec - Respuesta JSON */
router.get('/api/tec', function (req, res, next) {
  // Crea una imagen aleatoria específica para la ruta JSON
  var randomImageForAPI = getRandomImage();

  // Respuesta JSON con información del Tecnológico y la imagen aleatoria específica
  var tecInfo = {
    name: "Tec de Gustavo A Madero",
    description: "Información sobre el Tecnológico",
    mission: "Nuestra misión es...",
    values: "Nuestros valores son...",
    image: randomImageForAPI // Utiliza una imagen diferente para la ruta JSON
  };

  res.json(tecInfo);
});

module.exports = router;
