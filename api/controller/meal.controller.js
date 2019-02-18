import MealService from '../services/meal.service';

const MealController = {
    fetchAllMeals(req, res) {
        const allMeals = MealService.fetchAllMeals();
        return res.json({
            status: 'success',
            data: allMeals
        }).status(200);
    },

    addAMeal(req, res) {
        /**
         * Expected Json Format
         * {
         *  name: "some food type",
         *  size: "Large",
         *  price: "900"
         * }
         */

         const newMeal = req.body;

         const createdMeal = MealService.addNewMeal(newMeal);

         return res.json({
             status: "success",
             data: createdMeal
         }).status(201);
    }, 
    
    fetchAmeal(req, res) {
        const id = req.params.id;
        const reqMeal = MealService.getAMeal(id);

        return res.json({
            status: 'success',
            data: reqMeal
        }).status(200);
    }, 

    updateMeal(req, res) {
        const oldMeal = req.body;
        const id = req.params.id;
        const updatedMeal = MealService.updateAMeal(oldMeal, id);

        return res.json({
            status: "success",
            data: updatedMeal
        }).status(201);
    },

    deletedAMeal(req, res) {
        const id = req.params.id;
        const deleteMeal = MealService.deleteAMeal(id);

        return res.json({
            status: "success"
        }).status(201);
    }
     
};

export default MealController;