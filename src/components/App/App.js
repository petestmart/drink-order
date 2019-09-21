import React from 'react';
import './App.css';
import DrinkCards from '../DrinkCards/DrinkCards';
import Grid from "@material-ui/core/Grid";

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1>Drink Ordering System</h1>
      </header>
      <body>
        <h2>Select a Beverage</h2>
        <div className="Select-beverage">
          <Grid
            container spacing={24}
            alignItems="center"
            justify="center"
            spacing={2}
          >
            <Grid item md={3}>
              <DrinkCards />
            </Grid>
            <Grid item md={3}>
              <DrinkCards />
            </Grid>
            <Grid item md={3}>
              <DrinkCards />
            </Grid>
          </Grid>
        </div>
      </body>
    </div>
  );
}

export default App;
