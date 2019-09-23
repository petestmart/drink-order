import React, { Component } from 'react';
import './App.css';
import DrinkCards from '../DrinkCards/DrinkCards';
import Grid from "@material-ui/core/Grid";
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux';

class App extends Component {

  state = {

  }

  render() {

    const handleChange = event => {
      console.log('change', event.target.value);
      this.setState({
        test_input: event.target.value
      })
    };

    const handleClick = () => {
      this.props.dispatch({ type: 'ADD_TEST_TEXT', payload: this.state})
    }


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
          <div className="Test-input">
            <Input
              onChange={handleChange}
              // value={name}
            />
          </div>
          <div className="Test-text">
            Text goes to the database and comes back here:
          </div>
        </body>
      </div>
    );
  }
}

export default App;
