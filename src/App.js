import React from 'react';
import data from './data.json';
import Products from './components/products';
import Filter from './components/filter';

class App extends React.Component {
  constructor() {
    super();
    this.state = {
      products: data.products,
      size: '',
      sort: '',
    };
  }
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
      this.setState({ size: e.target.value, products: data.products });
    } else {
      this.setState({
        size: e.target.value,
        products: data.products.filter(
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
                count={this.state.products.length}
                size={this.state.size}
                sort={this.state.sort}
                filterproducts={this.filterProducts}
                sortproducts={this.sortProducts}
              />
              <Products products={this.state.products} />
            </div>
            <div className="sidebar">Cart Items</div>
          </div>
        </main>
        <footer>All rights reserved</footer>
      </div>
    );
  }
}

export default App;
