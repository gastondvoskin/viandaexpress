const {Router} = require('express');
const { getFoodHandler,postFoodHandler,putFoodHandler,deleteFoodHandler } = require('../handlers/foodHandlers');
const foodRouter = Router();


foodRouter.get('/', getFoodHandler );
foodRouter.post('/', postFoodHandler );
foodRouter.put('/:id', putFoodHandler );
foodRouter.delete('/:id', deleteFoodHandler);
// foodRouter.put('/:id', (req, res) => {
//     const {id} = req.params
//     res.status(200).send(id)
// } );


module.exports = {foodRouter}