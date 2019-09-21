import React from 'react';
// import logo from './logo.svg';
import './App.css';
import DrinkCards from '../DrinkCards/DrinkCards';

function App() {
  return (
    <div className="App">
      <header className="App-header">
       <h1>Drink Ordering System</h1>
      </header>
      <body>
        <h2>Select a Beverage</h2>
        <DrinkCards/>
      </body>
    </div>
  );
}

export default App;
