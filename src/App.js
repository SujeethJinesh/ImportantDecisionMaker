import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button } from 'react-bootstrap';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <Button bsStyle="primary" bsSize="large">
            Quick Yes/No option
          </Button>
          <Button bsStyle="primary" bsSize="large">
            Choose between different options
          </Button>
        </header>
      </div>
    );
  }
}

export default App;
