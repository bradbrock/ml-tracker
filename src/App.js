import React, { Component } from 'react';
import './App.css';
import StoreMapContainer from './StoreMapContainer';
import CardList from './CardList';
import data from './data/locations.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lat: 42.3601,
      lng: -71.0589
    };
  }
  

  componentDidMount() {
    // this.getCoords();
    // this.getMarkers(data);
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
      <div className="app">
        <CardList storeLocations={{ data }} />
        {/* <StoreMapContainer location={{lat: this.state.lat, lng: this.state.lng}} storeLocations={{ data }} /> */}
        <StoreMapContainer location={{lat: 32.9977044, lng: -96.8445253}} storeLocations={{ data }} />
      </div>
    );
  }
}

export default App;
