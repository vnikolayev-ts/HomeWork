//src/App.js
import React from 'react';
import  { useState, useEffect } from 'react';
import ShopperListing from './components/ShopperListing';
import shopperData from './shopperData';
import './styles/ShopperListing.css';




function App() {

  const [filteredProducts, setFilteredProducts] = useState(shopperData);
  const [activeCategory, setActiveCategory] = useState("All");

  const filterProducts = (category) => {
    setActiveCategory(category);
    if (category === "All") {
      setFilteredProducts(shopperData);
    } else {
      setFilteredProducts(shopperData.filter(product => product.category === category));
    }
  };



  return (
   
    <div className="header">
       <h1>Produktliste</h1>
       <div className="filter-buttons">
        <button
          className={activeCategory === "All" ? "active" : ""}
          onClick={() => filterProducts("All")}
        >
          Alle
        </button>
        <button
          className={activeCategory === "Textil" ? "active" : ""}
          onClick={() => filterProducts("Textil")}
        >
          T-Shirts
        </button>
        <button
          className={activeCategory === "Taschen" ? "active" : ""}
          onClick={() => filterProducts("Taschen")}
        >
          Taschen
        </button>
      </div>
      <div className="shop-container">
      {filteredProducts.map((shopper, index) => (
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
    </div>
  );
}

export default App;
