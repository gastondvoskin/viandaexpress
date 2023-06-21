const {Router} = require('express');
const {getDietsHandler} = require('../handlers/dietHandlers')
const dietsRouter = Router()


dietsRouter.get('/', getDietsHandler )



module.exports = {dietsRouter}