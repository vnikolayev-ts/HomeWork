// src/App.js
import React from 'react';
import ShopperListing from './components/ShopperListing';
import './styles/ShopperListing.css';

const imageBasePath = process.env.PUBLIC_URL + '/images/shopper/';
const shopperData = [
  {
    title: "Einkaufstasche - Baumwolltasche - Shopper (Weiß / Schwarz)",
    price: "14,99 €",
    image: imageBasePath + "shoper_v1.png",
    productInfo: "AEN ‏ : ‎ 456123789-1",
    color: "Weiß / Schwarz",
    dimensions: "44,96 x 10,92 x 39,88 cm; 300 Gramm",
    releaseDate: "22. Mai 2024",
    manufacturer: "Techstarter",
    category: "Taschen"
  },
  {
    title: "Einkaufstasche - Baumwolltasche - Shopper (Orange)",
    price: "14,99 €",
    image: imageBasePath + "shoper_v2.png",
    productInfo: "AEN ‏ : ‎ 456123789-2",
    color: "Orange",
    dimensions: "44,96 x 10,92 x 39,88 cm; 300 Gramm",
    releaseDate: "22. Mai 2024",
    manufacturer: "Techstarter",
    category: "Taschen"
  },
  {
    title: "Einkaufstasche - Baumwolltasche - Shopper (Dunkelrot)",
    price: "14,99 €",
    image: imageBasePath + "shoper_v3.png",
    productInfo: "AEN ‏ : ‎ 456123789-3",
    color: "Dunkelrot",
    dimensions: "44,96 x 10,92 x 39,88 cm; 300 Gramm",
    releaseDate: "22. Mai 2024",
    manufacturer: "Techstarter",
    category: "Taschen"
  },
  {
    title: "Einkaufstasche - Baumwolltasche - Shopper (Rot)",
    price: "14,99 €",
    image: imageBasePath + "shoper_v4.png",
    productInfo: "AEN ‏ : ‎ 456123789-4",
    color: "Rot",
    dimensions: "44,96 x 10,92 x 39,88 cm; 300 Gramm",
    releaseDate: "22. Mai 2024",
    manufacturer: "Techstarter",
    category: "Taschen"
  },
  {
    title: "Einkaufstasche - Baumwolltasche - Shopper (Blau)",
    price: "14,99 €",
    image: imageBasePath + "shoper_v5.png",
    productInfo: "AEN ‏ : ‎ 456123789-5",
    color: "Blau",
    dimensions: "44,96 x 10,92 x 39,88 cm; 300 Gramm",
    releaseDate: "22. Mai 2024",
    manufacturer: "Techstarter",
    category: "Taschen"
  },
  {
    title: "Einkaufstasche - Baumwolltasche - Shopper (Rosa)",
    price: "14,99 €",
    image: imageBasePath + "shoper_v6.png",
    productInfo: "AEN ‏ : ‎ 456123789-6",
    color: "Rosa",
    dimensions: "44,96 x 10,92 x 39,88 cm; 300 Gramm",
    releaseDate: "22. Mai 2024",
    manufacturer: "Techstarter",
    category: "Taschen"
  }
];

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
          dimensions={shopper.dimensions}
          releaseDate={shopper.releaseDate}
          manufacturer={shopper.manufacturer}
          category={shopper.category}
        />
      ))}
    </div>
  );
}

export default App;
