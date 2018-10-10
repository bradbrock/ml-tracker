import React, { Component } from 'react';
import './App.css';
import StoreMapContainer from './StoreMapContainer';
import CardList from './CardList';


class App extends Component {
  constructor(props) {
    super(props);
    // this.handleLoc = this.handleLoc.bind(this);
    this.state = {
      lat: 42.3601,
      lng: -71.0589
    };
  }
  

  componentDidMount() {
    this.getCoords();
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

  // getMarkers = () => {
  //   console.log(data);
  // }

  render() {
    return (
      <div className="app">
        <CardList />
        <StoreMapContainer location={{lat: this.state.lat, lng: this.state.lng}} />
      </div>
    );
  }
}

export default App;
