import React, { Component } from 'react';
import './App.css';

import { Route } from 'react-router';
import { BrowserRouter } from 'react-router-dom';

import Home from "./components/Home";
// import Navigation from "./components/Navigation";
import YesNo from "./components/YesNo";
import SelectChoices from "./components/SelectChoices";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          <Route exact path="/" component={Home}/>
          <Route exact path={"YesNo"} component={YesNo}/>
          <Route exact path={"SelectChoices"} component={SelectChoices}/>
          <Route component={Error} />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
