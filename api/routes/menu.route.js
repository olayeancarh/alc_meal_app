import { Router } from 'express';

// Controller
import MenuController from '../controller/menu.controller';

const router = Router();

router.get('/', MenuController.fetchAllMenus);
router.post('/', MenuController.addAMenu);
router.post('/:id', MenuController.updateMenu);
router.get('/delete/:id', MenuController.updateMenu);
router.get('/:id', MenuController.fetchAmenu);

export default router;
