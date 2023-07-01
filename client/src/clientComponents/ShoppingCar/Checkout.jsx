import React, { useEffect } from "react";
import classnames from 'classnames'
import { Context } from "./ContextProvider";
import Item from './Item.jsx'

const Checkout = ({ onClick }) => {
  const [isVisible, setIsVisible] = React.useState(true);
  const { preferenceId, isLoading: disabled, orderData, setOrderData } = React.useContext(Context);
  const shoppingCartClass = classnames('shopping-cart dark', {
    'shopping-cart--hidden': !isVisible,
  })
console.log(orderData)
  useEffect(() => {
    if (preferenceId) setIsVisible(false);
  }, [preferenceId])


  const updatePrice = (event) => {
    const quantity = event.target.value;
    const amount = parseInt(orderData.price) * parseInt(quantity);
    setOrderData({ ...orderData, quantity, amount });
  }
  const image="../img/product.png";
  const name="nombre de vianda";
  const price=10;
  return (
    <section className={shoppingCartClass}>
      <div className="container" id="container">
        <div className="block-heading">
          <h2>Shopping Cart</h2>
          {/* <p>This is an example of Checkout Pro integration of Mercado Pago</p> */}
        </div>
        <div className="content">
          {orderData.forEach(item=>{
            return(
              <Item updatePrice={updatePrice} name={item.name} image={item.image} finaly_price={item.finaly_price} amount={item.amount} quantity={item.quantity}/>
            )
          })}
            
        </div>
      </div>
    </section>
  );
};

export default Checkout;