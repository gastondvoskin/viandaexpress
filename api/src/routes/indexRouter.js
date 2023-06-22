const { Router } = require('express');
const { foodRouter } = require('./foodRouter');
const { dietsRouter } = require('./dietRouter');
const { foods, diets } = require("../../api");
const { Food, Diet } = require('../db');

const router = Router();

router.use('/food', foodRouter);
router.use('/diets', dietsRouter);
router.use('/api', async (req, res) => {
    //const apiCarnes = await Food.bulkCreate(carnes)
    const apiEnsaldas = await Food.bulkCreate(foods);
    const apiDiets = await Diet.bulkCreate(diets);
    res.status(200).json("Comidas cargadas");
})

module.exports = router;
