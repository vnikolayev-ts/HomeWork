import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';





function App() {
  const inlineStyle = {
    color: 'green',
    fontSize: '30px'
  };

  function generatePerfectSquare() {
    // Generiere eine Zufallszahl zwischen 1 und 10
    let num = Math.floor(Math.random() * 10) + 1;
    // Quadriere die Zahl, um eine perfekte Quadratwurzel zu erhalten
    let perfectSquare = num * num;
    return perfectSquare;
  }

  const add = (a, b) => a + b;
  const sqrt = (num) => Math.sqrt(num);

  const randomNum = Math.floor(Math.random() * 100) + 1;
  const currentDate = new Date().toLocaleDateString();

  
  const randomNum2 = Math.floor(Math.random() * 100) + 1;
  const randomNum3 = Math.floor(Math.random() * 100) + 1;
  const  randomNum4 = Math.floor(Math.random() * 50) * 2 + 2;
  const  randomNum5 =generatePerfectSquare();
  return (
    <div>
      <h1 className="red-text">Hallo, Welt! CSS RED</h1>
      <h2 className="blue-text">Willkommen zu React CSS BLUE</h2>
      <p style={inlineStyle}>Servus CSS Inline-Styling.</p>
      <h3>Addition von {randomNum2} und {randomNum3}: {add(randomNum2, randomNum3)}</h3>
      <h3>Quadratwurzel von {randomNum5}: {sqrt(randomNum5)}</h3>
      <p>Zufällige Zahl zwischen 1 und 100: {randomNum}</p>
      <p>Heutiges Datum: <b>{currentDate}</b></p>
    </div>
  );
}

ReactDOM.render(<App />, document.getElementById('root'));
