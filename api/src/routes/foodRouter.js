const {Router} = require('express');
const { getFoodHandler,postFoodHandler,putFoodHandler} = require('../handlers/foodHandlers');
const {configureMulter} = require('./utils/configureMuter')


const foodRouter = Router();
const upload = configureMulter(); 

foodRouter.get('/', getFoodHandler );
foodRouter.post('/', upload.single('image'), postFoodHandler);
foodRouter.put('/', putFoodHandler );



module.exports = {foodRouter}