const {Router} = require('express');
const foodRouter = Router()


foodRouter.get('/', (req,res)=>{
    res.status(200).send('Deberia traer todas las viandas')
})



module.exports = {foodRouter}