// Navbar.js
import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; 

function Navbar({ cartItemsCount }) {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#">Shop Homepage</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#">Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#">About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="shopDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                Shop
              </a>
              <div className="dropdown-menu" aria-labelledby="shopDropdown">
                <a className="dropdown-item" href="#">All Products</a>
                <a className="dropdown-item" href="#">Popular Items</a>
                <a className="dropdown-item" href="#">New Arrivals</a>
              </div>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => { /* your cart action */ }}>
                <FaShoppingCart />
                Cart 
                {cartItemsCount > 0 && (
                  <span className="badge badge-pill badge-primary ml-1">
                    {cartItemsCount}
                  </span>
                )}
              </button>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
