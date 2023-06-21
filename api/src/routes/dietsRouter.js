const {Router} = require('express');
const dietsRouter = Router()


dietsRouter.get('/', (req,res)=>{
    res.status(200).send('Deberia traer todas las dietas')
})



module.exports = {dietsRouter}