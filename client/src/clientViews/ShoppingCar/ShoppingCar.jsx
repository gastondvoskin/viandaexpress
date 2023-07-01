import React, { useState, useEffect} from "react";
import { initMercadoPago } from "@mercadopago/sdk-react";
import Payment from "../../clientComponents/ShoppingCar/Payment";
import Checkout from "../../clientComponents/ShoppingCar/Checkout.jsx";
import Footer from "../../clientComponents/ShoppingCar/Footer.jsx";
import InternalProvider from "../../clientComponents/ShoppingCar/ContextProvider.jsx";
import { SpinnerCircular } from 'spinners-react';
import { useDispatch, useSelector } from "react-redux";

// REPLACE WITH YOUR PUBLIC KEY AVAILABLE IN: https://developers.mercadopago.com/panel
initMercadoPago('APP_USR-8e95f5fd-f2e0-4982-8ac8-27b1f1b175bb');


const ShoppingCar = () => {
  const [preferenceId, setPreferenceId] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [orderData, setOrderData] = useState([
    {id:1,name:'producto1',image:'img1',finaly_price:10,quantity:1,amount:10},
    {id:2,name:'producto2',image:'img2',finaly_price:10,quantity:1,amount:10},
    {id:3,name:'producto3',image:'img3',finaly_price:10,quantity:1,amount:10},
  ]);
  //const allItems=useSelector((state)=>state.foodsReducer.orderItems);
  // const allItems=[
  //   {id:1,name:'producto1',image:'img1',finaly_price:10,quantity:1,amount:10},
  //   {id:2,name:'producto2',image:'img2',finaly_price:10,quantity:1,amount:10},
  //   {id:3,name:'producto3',image:'img3',finaly_price:10,quantity:1,amount:10},
  // ]
  // useEffect(()=>{
  //   allItems.forEach((item)=>{
  //     setOrderData([
  //       ...orderData,
  //       item
  //     ])
  //   });
  // },[])
  console.log(orderData)
  const handleClick = () => {
    setIsLoading(true);
    fetch("http://localhost:8080/create_preference", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(orderData),
    })
      .then((response) => {
        return response.json();
      })
      .then((preference) => {
        setPreferenceId(preference.id);
      })
      .catch((error) => {
        console.error(error);
      }).finally(() => {
        setIsLoading(false);
      })
  };

  const renderSpinner = () => {
     if (isLoading) {
      return (
        <div className="spinner-wrapper">
          <SpinnerCircular сolor='#009EE3' />
        </div>
      )
     }
  }

  return (
    <InternalProvider context={{ preferenceId, isLoading, orderData, setOrderData }}>
      <main>
        {renderSpinner()}
        <Checkout onClick={handleClick} description/>
        <Payment />
      </main>
      <Footer />
    </InternalProvider>
  );
};

export default ShoppingCar;