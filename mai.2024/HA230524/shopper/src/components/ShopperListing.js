// src/components/ShopperListing.js
import React from 'react';
import '../styles/ShopperListing.css';

function ShopperListing({ title, price, image, productInfo, color, dimensions, releaseDate, manufacturer, category }) {
  return (
    <div className="shopper-listing">
      <h2>{title}</h2>
      <img src={image} alt={title} />
      <p><strong>Preis:</strong> {price}</p>
      <p><strong>Beschreibung:</strong> </p><p>{productInfo}</p>
      <p><strong>Farbe:</strong> {color}</p>
      <p><strong>Produktabmessungen:</strong> {size}</p>
      <p><strong>Im Angebot seit:</strong> {releaseDate}</p>
      <p><strong>Hersteller:</strong> {manufacturer}</p>
      <p><strong>Kategorie:</strong> {category}</p>
    </div>
  );
}

export default ShopperListing;
