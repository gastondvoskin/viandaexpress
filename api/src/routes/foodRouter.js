const {Router} = require('express');
const { getFoodHandler,postFoodHandler,putFoodHandler} = require('../handlers/foodHandlers');
const multer = require('multer');
// const {configureMulter} = require('./utils/configureMuter')

const foodRouter = Router();

const storage = multer.memoryStorage();
const upload = multer({ storage: storage });

foodRouter.get('/', getFoodHandler );
foodRouter.post('/', upload.single('image'), postFoodHandler);
foodRouter.put('/', putFoodHandler );



module.exports = {foodRouter}