import React, { Component } from 'react';
import './App.css';

// import { Route } from 'react-router';
import { BrowserRouter, Route } from 'react-router-dom';

import Home from "./components/Home";
import YesNo from "./components/YesNo";
import SelectChoices from "./components/SelectChoices";
import Error from "./components/Error";

class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div>
          {/* <Route path="/" render={ this.props => <Home {...this.props} /> } /> */}

          <Route exact path="/" component={Home}/>
          <Route exact path={"/YesNo"} component={YesNo}/>
          <Route exact path={"/SelectChoices"} component={SelectChoices}/>
          <Route component={ Error } />
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
