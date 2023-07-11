const axios = require("axios");

const paymentDataController = async (paymentId) => {
  const accessToken =
    "TEST-5452904587884616-070811-5c5f10c51ac99fe1580a358884ccd136-1412025676";

  const url = `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=${accessToken}`;

  axios
    .get(url)
    .then((response) => {
      const paymentData = response.data;
      // console.log("DataMPByPaymentId", paymentData);
    })
    .catch((error) => {
      console.error(
        "Error al obtener los detalles del pago:",
        error.response.data
      );
    });

};

module.exports = { paymentDataController };
