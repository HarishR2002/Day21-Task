import React from 'react';

function HeroSection() {
  return (
    <header className="bg-dark py-5" style={{ backgroundImage: 'url("/path/to/your/image.jpg")', backgroundSize: 'cover', backgroundPosition: 'center' }}>
      <div className="container h-100">
        <div className="row h-100 align-items-center">
          <div className="col-lg-12">
            <h1 style={{ fontSize: '3.5rem', fontWeight: 'bold', color: 'white' }}>
              Shop in Style
            </h1>
            <p className="lead text-white">With this shop homepage template</p>
          </div>
        </div>
      </div>
    </header>
  );
}

export default HeroSection;
