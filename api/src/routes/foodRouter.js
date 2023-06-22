const {Router} = require('express');
const { getFoodHandler,postFoodHandler,putFoodHandler} = require('../handlers/foodHandlers');
const foodRouter = Router();
const multer = require('multer');
const storage = multer.diskStorage({
    destination: (req, file, cb) => {
      cb(null, 'uploads/'); // Carpeta donde se guardarán los archivos
    },
    filename: (req, file, cb) => {
      cb(null, Date.now() + '-' + file.originalname); // Nombre de archivo único
    }
  });
  
  const upload = multer({ storage });


foodRouter.get('/', getFoodHandler );
foodRouter.post('/',upload.single('image'), postFoodHandler );
foodRouter.put('/', putFoodHandler );



module.exports = {foodRouter}