import React from 'react';

function ShoppingCart({ cart, onRemoveFromCart }) {
  return (
    <div className="shopping-cart">
      <h2>Shopping Cart</h2>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
        cart.map(item => (
          <div key={item.id} className="cart-item">
            <span>{item.name}</span>
            <button onClick={() => onRemoveFromCart(item.id)}>Remove</button>
          </div>
        ))
      )}
      <p>Total Items: {cart.length}</p>
    </div>
  );
}

export default ShoppingCart;
