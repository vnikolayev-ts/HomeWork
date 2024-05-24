// src/components/ShopperListing.js
import React from 'react';
import '../styles/ShopperListing.css';

import  { useState, useEffect } from 'react';


function ShopperListing({ title, price, image, productInfo, color, size, releaseDate, manufacturer, category }) {
  
  const [timer, setTimer] = useState(Math.floor(Math.random() * 91) + 30);

  // useEffect Hook, um den Timer jede Sekunde zu verringern
  useEffect(() => {
    const interval = setInterval(() => {
      setTimer((prevTimer) => (prevTimer > 0 ? prevTimer - 1 : 0));
    }, 1000);

   

    // Cleanup-Funktion, um den Interval zu löschen, wenn die Komponente unmontiert wird
    return () => clearInterval(interval);
  }, []);

  // Umwandeln der verbleibenden Zeit in Minuten und Sekunden
  const minutes = Math.floor(timer / 60);
  const seconds = timer % 60;

  
  return (
    <div className="shopper-listing">
      <h2>{title}</h2>
      
      <img src={image} alt={title} />
      <p className="actionprice"><strong>Preis:</strong> {price} €</p>
      <p className="regprice">Regularpreis: {price + 3 } €</p>
      <p>Verbleibende Zeit: {minutes}:{seconds < 10 ? `0${seconds}` : seconds} Minuten</p>
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
