import React, { Component } from 'react';
import './App.css';
import StoreMapContainer from './StoreMapContainer';
import CardList from './CardList';
import data from './data/locations.json';


class App extends Component {
  constructor(props) {
    super(props);
    this.handleActiveItem = this.handleActiveItem.bind(this);
    this.recenterMap = this.recenterMap.bind(this);
    this.state = {

      // Boston
      lat: 42.3601,
      lng: -71.0589,

      // Dallas
      // lat: 32.9383048,
      // lng: -96.7449651,

      containsActiveItem: false,
      activeIndex: null
    };
  }

  handleActiveItem(index) {
    this.setState({
      containsActiveItem: true,
      activeIndex: index
    });
  }

  recenterMap(lat, lng) {
    // console.log(lat + " " + lng);
    this.setState({
      lat: lat,
      lng: lng
    });
  }
  
  // componentDidMount() {
  //   this.getCoords();
  // }

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
        <CardList
          storeLocations={{ data }}
          containsActiveItem={false}
          activeIndex={this.state.activeIndex}
          activeHandler={this.handleActiveItem}
          centerHandler={this.recenterMap}
        />
        <StoreMapContainer
          center={
            {
              lat: this.state.lat,
              lng: this.state.lng
            }
          }
          storeLocations={{ data }} />
      </div>
    );
  }
}

export default App;
