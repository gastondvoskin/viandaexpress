const axios = require("axios");
const {
  createPreferenceController,
} = require("../controllers/mercadopagoControllers/createPreferenceController");
const {
  paymentDataController,
} = require("../controllers/mercadopagoControllers/paymentDataController");

const createPreferenceHandler = async (req, res) => {
  try {
    const { userEmail } = req.params;
    const itemsBody = req.body.map((item) => {
      return {
        title: item.name,
        unit_price: item.final_price,
        quantity: item.quantity,
      };
    });

    const preferenceId = await createPreferenceController(userEmail, itemsBody);
    res.status(200).json(preferenceId);
  } catch (error) {
    res.status(400).send({ error: error.message });
  }
};

const paymentDataHandler = async (req, res) => {
  const paymentId = req.query["data.id"];
  const paymentData = await paymentDataController(paymentId);

  res.status(200);
};

module.exports = { createPreferenceHandler, paymentDataHandler };
