const {Router} = require('express');
const {getFoodHandler,postFoodHandler,putFoodHandler} = require('../handlers/foodHandlers');
const foodRouter = Router();


foodRouter.get('/', getFoodHandler );
foodRouter.post('/', postFoodHandler );
foodRouter.put('/', putFoodHandler );



module.exports = {foodRouter}