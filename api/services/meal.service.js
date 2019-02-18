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
    const lastMealId = dummyData.meals[mealLenght - 1].id;
    const newMealId = lastMealId + 1;
    mealObj.id = newMealId;
    dummyData.meals.push(mealObj);
    return mealObj;
  },

  getAMeal(id) {
    return dummyData.meals.find(meals => meals.id == id) || {};
  },

  updateAMeal(meal, id) {
    const getMeal = meal;
    const getMealIndex = dummyData.meals.findIndex(meals => meals.id == id);
    getMeal.id = id;
    dummyData.meals[getMealIndex] = getMeal;
    return getMeal;
  },

  deleteAMeal(id) {
    const getMealIndex = dummyData.meals.findIndex(meal => meal.id == id);
    dummyData.meals.splice(getMealIndex, 1);
  },

};

export default MealService;
