const {Router} = require('express');
const {getAllFoodHandler, getFoodByNameHandler, postFoodHandler,putFoodHandler} = require('../handlers/foodHandlers');
const foodRouter = Router();


foodRouter.get('/', getAllFoodHandler );
foodRouter.get('/', getFoodByNameHandler);
foodRouter.post('/', postFoodHandler );
foodRouter.put('/', putFoodHandler );



module.exports = {foodRouter}