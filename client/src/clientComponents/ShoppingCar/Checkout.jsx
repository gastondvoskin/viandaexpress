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
    const amount = parseInt(orderData.finaly_price) * parseInt(quantity);
    setOrderData({ ...orderData, quantity, amount });
  }
  console.log(orderData.finaly_price);
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
        <div className="row">
          <div className="col-md-12 col-lg-8">
                <div className="items">
                  <div className="product">
                    <div className="info">
                      <div className="product-details">
                      {orderData.map(item=>{
                        return(
                          <Item
                            updatePrice={updatePrice}
                            // onClick = {onClick}
                            // disabled = {disabled}
                            name={item.name}
                            image={item.image}
                            finaly_price={item.finaly_price}
                            amount={item.amount}
                            quantity={item.quantity}
                          />
                        )
                      })}
                      </div>
                    </div>
                  </div>
                </div>
          </div>
          <div className="col-md-12 col-lg-4">
            <div className="summary">
              <h3>Carrito</h3>
              
                
                {orderData.map(item=>{return(
                  <div className="summary-item">
                    <span className="text">Subtotal</span>
                    <span className="price" id="cart-total">${item.amount}</span>
                    </div>
                )})}
            
              <button
                className="btn btn-primary btn-lg btn-block"
                onClick={onClick}
                id="checkout-btn"
                disabled={disabled}
              >
                Checkout
              </button>
             
            </div>
          </div>
        </div>
        </div>
      </div>
    
    </section>
  );
};

export default Checkout;