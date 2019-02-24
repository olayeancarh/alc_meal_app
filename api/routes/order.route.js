import { Router } from 'express';

// Controller
import OrderController from '../controller/order.controller';

const router = Router();

router.get('/', OrderController.fetchAllOrders);
router.post('/', OrderController.addAOrder);
router.post('/:id', OrderController.updateOrder);
router.get('/delete/:id', OrderController.updateOrder);
router.get('/:id', OrderController.fetchAorder);

export default router;
