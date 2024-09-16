import React from 'react';

function Product({ product }) {
  return (
    <div className="card h-100">
      <a href="#"><img className="card-img-top" src={product.image} alt="" /></a>
      <div className="card-body">
        <h4 className="card-title">
          <a href="#">{product.name}</a>
        </h4>
        <h5>${product.price}</h5>
        <p className="card-text">{product.description}</p>
      </div>
      <div className="card-footer">
        <button className="btn btn-primary">Add to Cart</button>
      </div>
    </div>
  );
}

export default Product;
