import { useLocation } from "react-router-dom";

const PaymentStatus = () => {
  const location = useLocation();
  const queryParams = new URLSearchParams(location.search);
  const queryParamValue = queryParams.get("status");

  console.log("PaymentComponent: ", queryParamValue);

  return (
    <>
      <div>Payment</div>
      <div>Status: {queryParamValue}</div>
    </>
  );
};

export default PaymentStatus;
