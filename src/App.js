import React, { Component } from 'react';
import './App.css';
import StoreMapContainer from './StoreMapContainer';

class App extends Component {

  state = {
    lat: 42.3601,
    lng: -71.0589
  };

  componentDidMount() {
    this.getCoords();
  }

  getCoords = (props) => {
    navigator.geolocation.getCurrentPosition(
      (position) => this.setCoords(position),
      (error) => console.log(error)
    );
  }

  setCoords = position => {
    this.setState({
      lat: position.coords.latitude,
      lng: position.coords.longitude
    })
  }

  render() {
    return (
      <div className="App">
        <StoreMapContainer location={{lat: this.state.lat, lng: this.state.lng}} />
      </div>
    );
  }
}

export default App;
