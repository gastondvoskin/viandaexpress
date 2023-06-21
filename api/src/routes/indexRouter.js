const { Router } = require('express');
const {foodRouter} = require('./foodRouter');
const {dietsRouter} = require('./dietsRouter');
const router = Router();

router.use('/food',foodRouter);
router.use('/diets',dietsRouter);

module.exports = router;
