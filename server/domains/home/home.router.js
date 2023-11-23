// Importando el Router de Express
import { Router } from 'express';

// Importando el controlador
import homeController from './home.controller';

// Creando una isntancia del enrutador
const router = new Router();

// Enrutamos
// GET '/'
// GET '/home'
// GET '/index
router.get(['/', '/home', '/index'], homeController.home);

router.get('/about', homeController.about);

// Exporto este tramo de ruta
export default router;
