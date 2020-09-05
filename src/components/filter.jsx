import React from 'react';

const Filter = ({ count, size, sort, sortproducts, filterproducts }) => {
  return (
    <div className="filter">
      <div className="filter-result">{count} Products</div>
      <div className="filter-sort">
        order{' '}
        <select value={sort} onChange={sortproducts}>
          <option>Latest</option>
          <option value="lowest">Lowest</option>
          <option value="highest">highest</option>
        </select>
      </div>
      <div className="filter-size">
        Filter{' '}
        <select value={size} onChange={filterproducts}>
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

export default Filter;
