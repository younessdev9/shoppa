import React from 'react';
import { connect } from 'react-redux';
import Products from './components/products';
import Filter from './components/filter';
import Cart from './components/cart';

class App extends React.Component {
  handleOrder = (order) => {
    console.log(order);
    alert('need to save order mr ' + order.name);
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">Shop now get free delivery</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter />
              <Products />
            </div>
            <div className="sidebar">
              <Cart />
            </div>
          </div>
        </main>
        <footer>All rights reserved</footer>
      </div>
    );
  }
}
const mapStateToProps = (state) => ({
  products: state.shopData.products,
});
export default connect(mapStateToProps)(App);
