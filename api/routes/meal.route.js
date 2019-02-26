import { Router } from 'express';

// Controller
import MealController from '../controller/meal.controller';

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addAMeal);
router.post('/:id', MealController.updateMeal);
router.get('/delete/:id', MealController.updateMeal);
router.get('/:id', MealController.fetchAmeal);

export default router;
