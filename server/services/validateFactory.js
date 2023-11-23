// Importando Winsont
import log from '../config/winston';
// Usando el patrón Factory para la creación de un middelware de validación
// lo que sigue es una función que regresa una función
const Validator =
  ({ schema, getObject }) =>
  async (req, _, next) => {
    // Construyendo el objeto de validación
    const dataObject = getObject(req);
    // El proceso de validación se encierra en un bloque try
    try {
      // Se valida el objeto
      const validData = await schema.validate(dataObject, {
        abortEarly: false,
      });
      // Se inyecta el objeto validado en la petición
      req.validData = validData;
      log.info('Validación exitosa del registro');
    } catch (error) {
      // Creando objeto de validación
      req.errorData = error;
      log.error('Error en la validación del registro');
    }
    // Se invoca al siguiente middleware de la cadena
    return next();
  };
// Exportando validador
export default Validator;
