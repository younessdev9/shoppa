import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import { connect } from 'react-redux';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';

import formateCurrency from './util';
import { removeFromCartAction } from '../redux/cart/cart.Actions';
import { selectCartItems } from '../redux/cart/cart.selectors';

const Cart = ({ cartItems, removeFromCart }) => {
  const [data, setData] = useState(null);
  const [ShowCheckout, setShowCheckout] = useState(false);
  const { register, handleSubmit, errors, reset } = useForm({
    mode: 'onBlur',
    validationSchema: yup.object({
      email: yup.string().required('Email is required'),
      name: yup.string().required('Name is required'),
      address: yup.string().required('Address is required'),
    }),
  });

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
          <Fade left cascade>
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
                        className="remove-button"
                        onClick={() => removeFromCart(item)}
                      >
                        Remove
                      </button>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </Fade>
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
                  className="proced-btn"
                  onClick={() => setShowCheckout(!ShowCheckout)}
                >
                  Proceed
                </button>
              </div>
            </div>
            {ShowCheckout && (
              <Fade right cascade>
                <div className="cart">
                  <form
                    onSubmit={handleSubmit((data) => {
                      setData(data);
                      reset('');
                    })}
                  >
                    <ul className="form-container">
                      <li>
                        <label htmlFor="email">Email</label>
                        <input
                          id="email"
                          type="email"
                          ref={register({ required: 'Email is Required' })}
                          name="email"
                        />
                        {errors.email && (
                          <span className="input-error-msg">
                            {errors.email.message}
                          </span>
                        )}
                      </li>
                      <li>
                        <label htmlFor="name">Name</label>
                        <input
                          type="text"
                          ref={register({ required: 'Name is Required' })}
                          name="name"
                          id="name"
                        />
                        {errors.name && (
                          <span className="input-error-msg">
                            {errors.name.message}
                          </span>
                        )}
                      </li>
                      <li>
                        <label htmlFor="address">Adress</label>
                        <input
                          type="text"
                          ref={register({ required: 'Adress is required' })}
                          name="address"
                          id="address"
                        />
                        {errors.address && (
                          <span className="input-error-msg">
                            {errors.address.message}
                          </span>
                        )}
                      </li>
                      <li>
                        <button className="checkout-btn" type="submit">
                          Checkout
                        </button>
                      </li>
                      {data && (
                        <div>
                          thank you {data.name} for perchasing we will chip the
                          products as soon as possible to the address{' '}
                          {data.address}
                        </div>
                      )}
                    </ul>
                  </form>
                </div>
              </Fade>
            )}
          </div>
        )}
      </div>
    </div>
  );
};
const mapStateToProps = (state) => ({
  cartItems: selectCartItems(state),
});
const mapDispatchToProps = (dispatch) => ({
  removeFromCart: (product) => dispatch(removeFromCartAction(product)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Cart);
