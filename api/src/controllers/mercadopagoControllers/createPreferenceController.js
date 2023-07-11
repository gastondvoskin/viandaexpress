const mercadopago = require("mercadopago");

// REPLACE WITH YOUR ACCESS TOKEN AVAILABLE IN: https://developers.mercadopago.com/panel
mercadopago.configure({
  /* access_token: ACCESS_TOKEN_MP, */
  // access_token:
  //   "TEST-6319556541633434-063018-8336b2baf04fa2a889127d4915096375-1412025676",
  access_token:
    "TEST-5452904587884616-070811-5c5f10c51ac99fe1580a358884ccd136-1412025676",
});

const createPreferenceController = (pendingOrderId, itemsBody) => {
  let preference = {
    metadata: { relatedOrderId: pendingOrderId },
    items: itemsBody,

    back_urls: {
      success: "http://localhost:5173/payment",
      failure: "http://localhost:5173/payment",
      pending: "http://localhost:5173/payment",
    },
    auto_return: "approved",
  };

  const preferenceId = mercadopago.preferences
    .create(preference)
    .then(function (response) {
      return {
        id: response.body.id,
      };
    })
    .catch(function (error) {
      console.log(error);
    });

  return preferenceId;
};
module.exports = { createPreferenceController };
