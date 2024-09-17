import React from 'react';
import { FaShoppingCart } from 'react-icons/fa'; // Import cart icon

function Navbar({ cartItemsCount }) {
  const handleLinkClick = (e) => {
    e.preventDefault(); // Prevent default link behavior
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <a className="navbar-brand" href="#" onClick={handleLinkClick}>Shop Homepage</a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLinkClick}>Home</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLinkClick}>About</a>
            </li>
            <li className="nav-item dropdown">
              <a className="nav-link dropdown-toggle" href="#" id="shopDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false" onClick={handleLinkClick}>
                Shop
              </a>
              <div className="dropdown-menu" aria-labelledby="shopDropdown">
                <a className="dropdown-item" href="#" onClick={handleLinkClick}>All Products</a>
                <a className="dropdown-item" href="#" onClick={handleLinkClick}>Popular Items</a>
                <a className="dropdown-item" href="#" onClick={handleLinkClick}>New Arrivals</a>
              </div>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#" onClick={handleLinkClick}>
                <FaShoppingCart /> {/* Cart icon */}
                Cart 
                {cartItemsCount > 0 && (
                  <span className="badge badge-pill badge-primary ml-1">
                    {cartItemsCount}
                  </span>
                )}
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
