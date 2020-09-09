import React from 'react';
import { connect } from 'react-redux';
import Products from './components/products';
import Filter from './components/filter';
import Cart from './components/cart';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      products: this.props.products,
      cartItems: localStorage.getItem('cartItems')
        ? JSON.parse(localStorage.getItem('cartItems'))
        : [],
      size: '',
      sort: '',
    };
  }
  handleOrder = (order) => {
    console.log(order);
    alert('need to save order mr ' + order.name);
  };
  removeFromCart = (product) => {
    const cartItems = this.state.cartItems.slice();
    this.setState({
      cartItems: cartItems.filter((x) => x._id !== product._id),
    });
    localStorage.setItem(
      'cartItems',
      JSON.stringify(cartItems.filter((x) => x._id !== product._id))
    );
  };
  // addToCart = (product) => {
  //   const cartItems = this.state.cartItems.slice();
  //   let alreadyInCart = false;
  //   cartItems.forEach((item) => {
  //     if (item._id === product._id) {
  //       item.count++;
  //       alreadyInCart = true;
  //     }
  //   });
  //   if (!alreadyInCart) {
  //     cartItems.push({ ...product, count: 1 });
  //   }
  //   this.setState({ cartItems });
  //   localStorage.setItem('cartItems', JSON.stringify(cartItems));
  // };
  sortProducts = (e) => {
    console.log(e.target.value);
    const sort = e.target.value;
    this.setState((state) => ({
      sort: sort,
      products: this.state.products
        .slice()
        .sort((a, b) =>
          sort === 'lowest'
            ? a.price > b.price
              ? 1
              : -1
            : sort === 'highest'
            ? a.price < b.price
              ? 1
              : -1
            : a._id > b._id
            ? 1
            : -1
        ),
    }));
  };
  filterProducts = (e) => {
    if (e.target.value === '') {
      this.setState({ size: e.target.value, products: this.props.products });
    } else {
      this.setState({
        size: e.target.value,
        products: this.props.products.filter(
          (prod) => prod.availableSizes.indexOf(e.target.value) >= 0
        ),
      });
    }
  };

  render() {
    return (
      <div className="grid-container">
        <header>
          <a href="/">React Shopping</a>
        </header>
        <main>
          <div className="content">
            <div className="main">
              <Filter
                count={this.props.products.length}
                size={this.state.size}
                sort={this.state.sort}
                sortproducts={this.sortProducts}
              />
              <Products addToCard={this.addToCart} />
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
