const multer = require('multer');

const configureMulter = () => {
  const storage = multer.memoryStorage(); // Utiliza memoryStorage en lugar de diskStorage

  const fileFilter = (req, file, cb) => {
    // Implementa la lógica de filtrado si es necesario
    // Puedes usar file.mimetype para verificar el tipo de archivo permitido (por ejemplo, image/jpeg)

    // Llama a cb con true si el archivo es aceptado, o false si no lo es
    // También puedes llamar a cb con un error si deseas rechazar el archivo
    cb(null, true);
  };

  const upload = multer({ storage, fileFilter });

  return upload;
};

module.exports = { configureMulter };
