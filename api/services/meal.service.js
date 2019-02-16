import dummyData from '../utilz/dummyData';
import Meal from '../models/meal.models';

const MealService = {
  fetchAllMeals() {
    const availableMeals = dummyData.meals.map((meal) => {
      return new Meal(meal.id, meal.name, meal.size, meal.price);
    });

    return availableMeals;
  },

  addNewMeal(meal) {
    const mealObj = meal;
    const mealLenght = dummyData.meals.length;
    const lastMealId = dummyData.meals[mealLenght - 1];
    const newMealId = lastMealId + 1;
    mealObj.id = newMealId;
    dummyData.meals.push(mealObj);
    return mealObj;
  },

  getAMeal(id) {
    return dummyData.meals.find(meals => meals.id === id) || {};
  },

};

export default MealService;
