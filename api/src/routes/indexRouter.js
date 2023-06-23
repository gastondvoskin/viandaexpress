const { Router } = require('express');
const { foodRouter } = require('./foodRouter');
const { foods } = require("../../api");
const { Food } = require('../db');

const router = Router();

router.use('/food', foodRouter);
router.use('/api', async (req, res) => {
    const apiEnsaldas = await Food.bulkCreate(foods);
    res.status(200).json("Comidas cargadas");
})

module.exports = router;
