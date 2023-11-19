// Importing winston logger
import log from '../../config/winston';

// Importando el modelo
import ProjectModel from './project.model';

// Importando Httperrors

// Actions methods
// GET "/project"
const showDashboard = (req, res) => {
  res.send('⚠️ UNDER CONSTRUCTION: GET /project ⚠️');
};

// GET "/project/add"
const add = (req, res) => {
  res.render('project/addView');
};

// POST "/project/add"
const addPost = async (req, res) => {
  // Rescatando la info del formulario
  const { errorData: validationError } = req;
  // En caso de haber error
  // se le informa al cliente
  if (validationError) {
    log.info('Se entrega al cliente error de validación de add Project');
    // Se desestructuran los datos de validación
    const { value: project } = validationError;
    // Se extraen los campos que fallaron en la validación
    const errorModel = validationError.inner.reduce((prev, curr) => {
      // Creando una variable temporal para
      // evitar el error "no-param-reassing"
      const workingPrev = prev;
      workingPrev[`${curr.path}`] = curr.message;
      return workingPrev;
    }, {});
    return res.status(422).render('project/addView', { project, errorModel });
  }
  // En caso de que pase la validación
  // Se desestructura la información
  // de la peticion
  const { validData: project } = req;
  try {
    // Creando la instancia de un documento
    // con los valores de 'project'
    const savedProject = await ProjectModel.create(project);
    // Se contesta la información del proyecto al cliente
    log.info('Se entrega al cliente información del proyecto cargado');
    return res.status(200).json(savedProject);
  } catch (error) {
    log.error(
      'ln 53 project.controller: Error al guardar proyecto en la base de datos',
    );
    return res.status(500).json(error);
  }
};

// Controlador user
export default {
  // Action Methods
  showDashboard,
  add,
  addPost,
};
