import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

import Home from './Components/Home';
import Desktop from './Components/Desktop'

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Home/>
        <Desktop/>
      </React.Fragment>
    );
  }
}

export default App;
