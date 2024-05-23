//src/App.js
import React from 'react';
import ShopperListing from './components/ShopperListing';
import shopperData from './shopperData';
import './styles/ShopperListing.css';




function App() {
  return (
    <div className="shop-container">
      {shopperData.map((shopper, index) => (
        <ShopperListing
          key={index}
          title={shopper.title}
          price={shopper.price}
          image={shopper.image}
          productInfo={shopper.productInfo}
          color={shopper.color}
          size={shopper.dimensions}
          releaseDate={shopper.releaseDate}
          manufacturer={shopper.manufacturer}
          category={shopper.category}
        />
      ))}
    </div>
  );
}

export default App;
