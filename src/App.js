import React, { Component } from 'react';
import './App.css';
import StoreMapContainer from './StoreMapContainer';
import UserLocation from './UserLocation';

class App extends Component {
  render() {
    return (
      <div className="App">
        <StoreMapContainer />
        <UserLocation />
      </div>
    );
  }
}

export default App;
