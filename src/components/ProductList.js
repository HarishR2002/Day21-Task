import React from 'react';
import Product from './Product';

function ProductList({ products }) {
  return (
    <div className="row">
      {products.map(product => (
        <div className="col-lg-4 col-md-6 mb-4" key={product.id}>
          <Product product={product} />
        </div>
      ))}
    </div>
  );
}

export default ProductList;
