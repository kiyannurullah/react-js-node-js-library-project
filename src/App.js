import React, {Component} from 'react';
import './App.css';

import {AppRoute} from "./routes";

class App extends Component {
  render() {
    return (
        <div className="App">
          <AppRoute />
        </div>
    );
  }
}

export default App;
