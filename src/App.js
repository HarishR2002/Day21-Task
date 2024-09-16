import React, { useState } from 'react';
import Navbar from './components/Navbar';
import HeroSection from './components/HeroSection';
import ProductList from './components/ProductList';
import Footer from './components/Footer';
import DevicePreviewToolbar from './components/DevicePreviewToolbar'; // Import the toolbar
import { products } from './data/products';
import './App.css'; // Ensure to include App.css

function App() {
  const [cartItems, setCartItems] = useState([]);
  const [deviceView, setDeviceView] = useState('desktop');

  const addToCart = (product) => {
    setCartItems([...cartItems, product]);
  };

  const removeFromCart = (product) => {
    setCartItems(cartItems.filter(item => item.id !== product.id));
  };

  return (
    <div className={`app-container ${deviceView}`}> {/* Apply device view class */}
      <DevicePreviewToolbar onDeviceChange={setDeviceView} /> {/* Pass state setter */}
      <Navbar cartItemsCount={cartItems.length} />
      <HeroSection />
      <div className="container my-5">
        <ProductList products={products} addToCart={addToCart} removeFromCart={removeFromCart} cartItems={cartItems} />
      </div>
      <Footer />
    </div>
  );
}

export default App;
