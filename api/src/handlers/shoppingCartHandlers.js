require("dotenv").config();
/* const { ACCESS_TOKEN_MP } = process.env; */
const mercadopago = require("mercadopago");
const axios = require("axios");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  /* access_token: ACCESS_TOKEN_MP, */
  // access_token:
  //   "TEST-6319556541633434-063018-8336b2baf04fa2a889127d4915096375-1412025676",
  access_token:
    "TEST-5452904587884616-070811-5c5f10c51ac99fe1580a358884ccd136-1412025676",
});

const createPreferenceHandler = async (req, res) => {
  // console.log("Create Pref: ", req.body);
  const itemsBody = req.body.map((item) => {
    return {
      title: item.name,
      unit_price: item.final_price,
      quantity: item.quantity,
    };
  });
  // console.log("ItemsBody: ", itemsBody);
  let preference = {
    metadata: { orderId: "123" },
    items: itemsBody,

    back_urls: {
      success: "http://localhost:5173/payment",
      failure: "http://localhost:5173/payment",
      pending: "http://localhost:5173/payment",
    },
    auto_return: "approved",
  };

  mercadopago.preferences
    .create(preference)
    .then(function (response) {
      console.log("Preference: ", response.body);
      res.json({
        id: response.body.id,
      });
    })
    .catch(function (error) {
      console.log(error);
    });
};

const paymentDataHandler = (req, res) => {
  // console.log("GetInfo: ", req.query);
  // res.json({
  //   data: req.query,
  // });

  const paymentId = req.query["data.id"];
  console.log("PaymentId", paymentId);

  const accessToken =
    "TEST-5452904587884616-070811-5c5f10c51ac99fe1580a358884ccd136-1412025676";

  const url = `https://api.mercadopago.com/v1/payments/${paymentId}?access_token=${accessToken}`;

  axios
    .get(url)
    .then((response) => {
      const paymentData = response.data;
      console.log("DataMPByPaymentId", paymentData);
    })
    .catch((error) => {
      console.error(
        "Error al obtener los detalles del pago:",
        error.response.data
      );
    });
  res.status(200);
};

module.exports = { createPreferenceHandler, paymentDataHandler };
