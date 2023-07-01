export default function Item({updatePrice, name, image, finaly_price,amount, quantity, onClick,disabled}){
  console.log('aqui estoy name',amount);
  return(
        <div className="row">
            <div className="col-md-12 col-lg-8">
                  <div className="items">
                    <div className="product">
                      <div className="info">
                        <div className="product-details">
                          <div className="row justify-content-md-center">
                            <div className="col-md-3">
                              <img
                                className="img-fluid mx-auto d-block image"
                                alt="Image of a product"
                                src={image}
                              />
                            </div>
                            <div className="col-md-4 product-detail">
                              <h5>Producto</h5>
                              <div className="product-info">
                                <b>{name}</b>
                                <br />
                                <b>Precio:</b> $ <span id="unit-price">{finaly_price}</span>
                                <br />
                              </div>
                            </div>
                            <div className="col-md-3 product-detail">
                              <label htmlFor="quantity">
                                <b>Quantity</b>
                              </label>
                              <input
                              onChange={updatePrice}
                                type="number"
                                id="quantity"
                                value={quantity}
                                min="1"
                                className="form-control"
                              />
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
            </div>
            <div className="col-md-12 col-lg-4">
              <div className="summary">
                <h3>Carrito</h3>
                <div className="summary-item">
                  <span className="text">Subtotal</span>
                  <span className="price" id="cart-total">${amount}</span>
                </div>
                {/*
                <button
                  className="btn btn-primary btn-lg btn-block"
                  onClick={onClick}
                  id="checkout-btn"
                  disabled={disabled}
                >
                  Checkout
                </button>
                */}
              </div>
            </div>
        </div>
    )
}