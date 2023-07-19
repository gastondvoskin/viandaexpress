import { useEffect, useState } from "react";
import { useLocation } from "react-router-dom";
import axios from "axios";

const PaymentStatus = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const paymentId = queryParams.get("payment_id");
  const [order, setOrder] = useState(null);

  useEffect(() => {
    // const body = { payment_id: parseInt(paymentId) };
    axios
      .get(`/order/payment-id/${paymentId}`)
      .then((r) => r.data)
      .then((data) => {
        setOrder(data);
      })
      .catch((error) => console.log(error));
  }, [paymentId]);
  console.log(order);
  return (
    <>
      <div>Payment</div>
      <div>Estado:{order?.status}</div>
    </>
  );
};

export default PaymentStatus;
