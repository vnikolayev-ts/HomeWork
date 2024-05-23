12,99T-shi// src/App.js
import React from 'react';
import ShopperListing from './components/ShopperListing';
import './styles/ShopperListing.css';

const imageBasePath = process.env.PUBLIC_URL + '/images/t-shirt/';
const shopperData = [
  {
    title: "T-Shirt Variation (Weiß / Schwarz)",
    price: "12,99 €",
    image: imageBasePath + "variation_1.png",
    productInfo: "AEN ‏ : ‎ 889955443-1",
    color: "Weiß / Schwarz",
  size: "S/M/L/XL",
    releaseDate: "23.Mai 2024",
    manufacturer: "Techstarter",
    category: "Taschen"
  },
  {
    title: "T-Shirt Variation (Orange)",
    price: "12,99 €",
    image: imageBasePath + "variation_2.png",
    productInfo: "AEN ‏ : ‎ 889955443-2",
    color: "Orange",
    size: "S/M/L/XL",
    releaseDate: "23.Mai 2024",
    manufacturer: "Techstarter",
    category: "Taschen"
  },
  {
    title: "T-Shirt Variation (Dunkelrot)",
    price: "12,99 €",
    image: imageBasePath + "variation_3.png",
    productInfo: "AEN ‏ : ‎ 889955443-3",
    color: "Dunkelrot",
  size: "S/M/L/XL",
    releaseDate: "23.Mai 2024",
    manufacturer: "Techstarter",
    category: "Taschen"
  },
  {
    title: "T-Shirt Variation (Rot)",
    price: "12,99 €",
    image: imageBasePath + "variation_4.png",
    productInfo: "AEN ‏ : ‎ 889955443-4",
    color: "Rot",
   size: "S/M/L/XL",
    releaseDate: "23.Mai 2024",
    manufacturer: "Techstarter",
    category: "Taschen"
  },
  {
    title: "T-Shirt Variation (Blau)",
    price: "12,99 €",
    image: imageBasePath + "variation_5.png",
    productInfo: "AEN ‏ : ‎ 889955443-5",
    color: "Blau",
  size: "S/M/L/XL",
    releaseDate: "23.Mai 2024",
    manufacturer: "Techstarter",
    category: "Taschen"
  },
  {
    title: "T-Shirt Variation (Rosa)",
    price: "12,99 €",
    image: imageBasePath + "variation_6.png",
    productInfo: "AEN ‏ : ‎ 889955443-6",
    color: "Rosa",
  size: "S/M/L/XL",
    releaseDate: "23.Mai 2024",
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
