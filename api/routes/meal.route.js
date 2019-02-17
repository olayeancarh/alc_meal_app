import { Router } from "express";

// Controller 
import MealController from '../controller/meal.controller'

const router = Router();

router.get('/', MealController.fetchAllMeals);
router.post('/', MealController.addAMeal);
router.get('/:id', MealController.fetchAmeal);

export default router