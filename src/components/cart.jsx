import React, { useState } from 'react';
import formateCurrency from './util';

const Cart = ({ cartItems, removeFromCart, handleOrder }) => {
  const [ShowCheckout, setShowCheckout] = useState(false);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [address, setAddress] = useState('');

  const creatOrder = (e) => {
    e.preventDefault();
    const order = {
      name: name,
      email: email,
      address: address,
      cartItems: cartItems,
    };
    handleOrder(order);
  };
  return (
    <div>
      {cartItems.length === 0 ? (
        <div className="cart cart-header">Cart is empty</div>
      ) : (
        <div className="cart cart-header">
          you have {cartItems.length} in the Cart{' '}
        </div>
      )}
      <div>
        <div className="cart">
          <ul className="cart-items">
            {cartItems.map((item) => (
              <li key={item._id}>
                <div>
                  <img src={item.image} alt={item.title} />
                </div>
                <div>
                  <div>{item.title}</div>
                  <div className="right">
                    {formateCurrency(item.price)} X {item.count}{' '}
                    <button
                      className="button"
                      onClick={() => removeFromCart(item)}
                    >
                      Remove
                    </button>
                  </div>
                </div>
              </li>
            ))}
          </ul>
        </div>
        {cartItems.length !== 0 && (
          <div>
            <div className="cart">
              <div className="total">
                <div>
                  Total:{' '}
                  {formateCurrency(
                    cartItems.reduce((a, c) => a + c.price * c.count, 0)
                  )}
                </div>
                <button
                  className="button primary"
                  onClick={() => setShowCheckout(!ShowCheckout)}
                >
                  Proceed
                </button>
              </div>
            </div>
            {ShowCheckout && (
              <div className="cart">
                <form onSubmit={creatOrder}>
                  <ul className="form-container">
                    <li>
                      <label htmlFor="email">Email</label>
                      <input
                        id="email"
                        type="email"
                        required
                        onChange={(e) => setEmail(e.target.value)}
                        name="email"
                      />
                    </li>
                    <li>
                      <label htmlFor="name">Name</label>
                      <input
                        type="text"
                        required
                        onChange={(e) => setName(e.target.value)}
                        name="name"
                        id="name"
                      />
                    </li>
                    <li>
                      <label htmlFor="address">Adress</label>
                      <input
                        type="text"
                        required
                        onChange={(e) => setAddress(e.target.value)}
                        name="address"
                        id="address"
                      />
                    </li>
                    <li>
                      <button className="button primary" type="submit">
                        Checkout
                      </button>
                    </li>
                  </ul>
                </form>
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default Cart;
