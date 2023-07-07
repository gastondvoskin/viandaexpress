import { useLocation } from "react-router-dom";
import axios from "axios";
import { useAuth0 } from "@auth0/auth0-react";

const PaymentStatus = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const { user } = useAuth0();
  const userEmail = user?.email;
  let status = queryParams.get("status");
  const merchant_order_id = queryParams.get("merchant_order_id");
  const payment_id = queryParams.get("payment_id");

  if (status === "approved") status = "APROBADO";

  const bodyPutOrder = {
    userEmail,
    status,
    merchant_order_id,
    payment_id,
  };

  axios.put("/order", bodyPutOrder);

  return (
    <>
      <div>Payment</div>
      <div>Status: {status}</div>
    </>
  );
};

export default PaymentStatus;
