import React, { useState } from 'react';
import Fade from 'react-reveal/Fade';
import Modal from 'react-modal';
import { connect } from 'react-redux';
import formateCurrency from './util';
import Zoom from 'react-reveal/Zoom';
import { addToCartAction } from '../redux/cart/cart.Actions';

const Products = ({ products, addToCard }) => {
  const [product, setProduct] = useState(null);
  const openModal = (product) => {
    setProduct(product);
  };
  const closeModal = () => {
    setProduct(null);
  };
  const customStyles = {
    content: {
      top: '50%',
      left: '50%',
      right: 'auto',
      bottom: 'auto',
      marginRight: '-50%',
      transform: 'translate(-50%, -50%)',
    },
  };
  return (
    <div>
      <Fade bottom cascade>
        <ul className="products">
          {products.map((product) => (
            <li key={product._id}>
              <div className="product">
                <a href={'#' + product._id} onClick={() => openModal(product)}>
                  <img src={product.image} alt={product.title} />
                  <p>{product.title}</p>
                </a>
                <div className="product-price">
                  <div>{formateCurrency(product.price)}</div>
                  <button
                    className="add-to-cart"
                    onClick={() => addToCard(product)}
                  >
                    Add To Cart
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </Fade>
      {product && (
        <Modal isOpen={true} onRequestClose={closeModal} style={customStyles}>
          <Zoom>
            <button onClick={closeModal} className="close-modal">
              X
            </button>
            <div className="product-details">
              <img src={product.image} alt={product.title} />
              <div className="product-details-description">
                <p className="modal__product-title">{product.title}</p>
                <p className="modal-product-description">
                  {product.description}
                </p>
                <p>
                  Available sizes :{' '}
                  {product.availableSizes.map((el) => (
                    <span>
                      {' '}
                      <button className="available-sizes">{el}</button>{' '}
                    </span>
                  ))}
                </p>
                <div className="product-price">
                  <span>{formateCurrency(product.price)}</span>
                  <button
                    className="add-to-cart"
                    onClick={() => {
                      addToCard(product);
                      closeModal();
                    }}
                  >
                    Add to Cart
                  </button>
                </div>
              </div>
            </div>
          </Zoom>
        </Modal>
      )}
    </div>
  );
};
const mapStateToProps = ({ shopData, cart }) => ({
  products: shopData.products,
  cartItems: cart.cartItems,
});
const mapDispatchToProps = (dispatch) => ({
  addToCard: (product, cartItems) =>
    dispatch(addToCartAction(product, cartItems)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Products);
