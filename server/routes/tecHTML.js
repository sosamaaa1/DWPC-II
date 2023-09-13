var express = require('express');
var router = express.Router();

// Función para generar una imagen aleatoria
function getRandomImage() {
  // lógica para seleccionar una imagen aleatoria
  var images =
  ['https://0901.static.prezi.com/preview/v2/uyaxil4rk42hxhg3zahalyror36jc3sachvcdoaizecfr3dnitcq_3_0.png', 
  'https://pbs.twimg.com/media/FReASH1XsAUbhHq.jpg', 
  'https://fastly.4sqi.net/img/general/600x600/26731368_9QNKhSCGynMk__ZkfOMB3I6id0dovfptaJBMD5z6A3k.jpg'];
  var randomIndex = Math.floor(Math.random() * images.length);
  return images[randomIndex];
}

// GET /about/tec 
router.get('/', function (req, res, next) {
  // Crea una imagen aleatoria
  var randomImage = getRandomImage();
  var title = 'INSTITUTO TECNOLOGICO GUSTAVO A MADERO';
  // Respuesta HTML 
  res.render('tec', {
    title: title,
    name: "Instituto Tecnologico de Gustavo A Madero",
    description: "El Instituto Tecnológico Gustavo A. Madero, conocido como ITGAM, es una institución educativa de nivel superior ubicada en la delegación Gustavo A. Madero de la Ciudad de México. Fundado con el propósito de ofrecer educación de calidad y formar profesionales altamente capacitados en diversas disciplinas tecnológicas, el ITGAM se ha convertido en un referente en la formación de talento en la región.",
    mission: "La misión del Instituto Tecnológico Gustavo A. Madero es brindar una educación superior integral, innovadora y de excelencia que contribuya al desarrollo de profesionales altamente competentes y éticos en áreas tecnológicas y científicas. El ITGAM se compromete a fomentar la investigación, la creatividad y el espíritu emprendedor en sus estudiantes, promoviendo así el progreso de la sociedad y la economía local y nacional.",
    values: "Excelencia académica: El ITGAM se esfuerza por mantener altos estándares de calidad en la educación, la investigación y la formación de sus estudiantes, promoviendo el logro académico excepcional. Integridad: La honestidad, la ética y el respeto son valores fundamentales en la comunidad del ITGAM. Se fomenta un ambiente de confianza y responsabilidad. Innovación: La institución valora la creatividad y la innovación como motores del progreso. Se alienta a los estudiantes y profesores a buscar soluciones innovadoras a los desafíos tecnológicos y científicos. Responsabilidad social: El ITGAM se compromete a ser un agente de cambio positivo en la sociedad, promoviendo la responsabilidad social y el compromiso cívico entre sus miembros. Inclusión y diversidad: El ITGAM promueve un ambiente inclusivo donde se respeten y celebren las diferencias individuales, fomentando la diversidad de perspectivas y culturas. Colaboración: La colaboración interdisciplinaria y la cooperación entre estudiantes, profesores y la comunidad externa son esenciales para el ITGAM. Se busca el trabajo en equipo como medio para abordar desafíos complejos. Desarrollo sostenible: La institución se preocupa por el medio ambiente y promueve prácticas y tecnologías sostenibles en todas sus actividades.",
    image: randomImage
  });
});

module.exports = router;
