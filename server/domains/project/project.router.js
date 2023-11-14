// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import projectController from './project.controller';

// Importando factory de validación
import ValidateFactory from '../../services/validateFactory';
// Importando el validador de proyectos
import projectValidator from './project.validator';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET "/project"
router.get('/', projectController.showDashboard);

// GET "/project/add"
router.get('/add', projectController.add);

// POST "/project/add"
router.post(
  '/add',
  ValidateFactory({
    schema: projectValidator.projectSchema,
    getObject: projectValidator.getProject,
  }),
  projectController.addPost,
);

// Exporto este tramo de ruta
export default router;
