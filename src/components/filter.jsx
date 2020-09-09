import React from 'react';
import { connect } from 'react-redux';
import {
  filterProductsAction,
  sortproductsAction,
} from '../redux/shop-data/shop-actions';
const Filter = ({
  shopData,
  count,
  setfilteredProducts,
  setsortedproducts,
}) => {
  return (
    <div className="filter">
      <div className="filter-result">{count} Products</div>
      <div className="filter-sort">
        order{' '}
        <select
          value={shopData.sort}
          onChange={(e) => setsortedproducts(e, shopData.products)}
        >
          <option>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">highest</option>
        </select>
      </div>
      <div className="filter-size">
        Filter{' '}
        <select
          value={shopData.size}
          onChange={(e) => setfilteredProducts(e, shopData.products)}
        >
          <option value="">All</option>
          <option value="XS">XS</option>
          <option value="S">S</option>
          <option value="M">M</option>
          <option value="L">L</option>
          <option value="XL">XL</option>
          <option value="XXL">XXL</option>
        </select>
      </div>
    </div>
  );
};
const mapStateToProps = ({ shopData }) => ({
  shopData: shopData,
});
const mapDispatchToProps = (dispatch) => ({
  setfilteredProducts: (e) => dispatch(filterProductsAction(e)),
  setsortedproducts: (e, data) => dispatch(sortproductsAction(e, data)),
});
export default connect(mapStateToProps, mapDispatchToProps)(Filter);
