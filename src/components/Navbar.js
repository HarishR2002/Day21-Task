import React from 'react';
import { FaShoppingCart } from 'react-icons/fa';

function Navbar({ cartItemsCount }) {
  const handleNavigation = (path) => {
    // Implement your navigation logic here, e.g., using React Router
    console.log(`Navigating to ${path}`);
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        <button 
          className="navbar-brand" 
          onClick={() => handleNavigation('/')} 
          style={{ background: 'none', border: 'none', cursor: 'pointer', fontSize: '1.25rem' }}
        >
          Shop Homepage
        </button>
        <button
          className="navbar-toggler"
          type="button"
          data-toggle="collapse"
          data-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav ml-auto">
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleNavigation('/home')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                Home
              </button>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleNavigation('/about')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
                About
              </button>
            </li>
            <li className="nav-item dropdown">
              <button
                className="nav-link dropdown-toggle"
                id="shopDropdown"
                role="button"
                data-toggle="dropdown"
                aria-haspopup="true"
                aria-expanded="false"
                style={{ background: 'none', border: 'none', cursor: 'pointer' }}
              >
                Shop
              </button>
              <div className="dropdown-menu" aria-labelledby="shopDropdown">
                <button className="dropdown-item" onClick={() => handleNavigation('/products')}>
                  All Products
                </button>
                <button className="dropdown-item" onClick={() => handleNavigation('/popular')}>
                  Popular Items
                </button>
                <button className="dropdown-item" onClick={() => handleNavigation('/new')}>
                  New Arrivals
                </button>
              </div>
            </li>
            <li className="nav-item">
              <button className="nav-link" onClick={() => handleNavigation('/cart')} style={{ background: 'none', border: 'none', cursor: 'pointer' }}>
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
