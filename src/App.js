import React, { Component } from 'react';
import './App.css';
import Header from './Header';
import StoreMapContainer from './StoreMapContainer';
import CardList from './CardList';
import data from './data/locations.json';
import EditInventory from './EditInventory';
import EditCatalog from './EditCatalog';
import firebase from './firebase.js';
// import FluidButton from './FluidButton.js';

class App extends Component {
  constructor(props) {
    super(props);
    this.handleActiveItem = this.handleActiveItem.bind(this);
    this.recenterMap = this.recenterMap.bind(this);
    this.updateInventory = this.updateInventory.bind(this);
    this.cancelUpdate = this.cancelUpdate.bind(this);
    this.editCatalog = this.editCatalog.bind(this);
    this.cancelEditCatalog = this.cancelEditCatalog.bind(this);
    this.loadLocationData = this.loadLocationData.bind(this);
    this.state = {

      // Boston
      // lat: 42.3601,
      // lng: -71.0589,

      // Dallas
      lat: 32.9383048,
      lng: -96.7449651,

      containsActiveItem: false,
      activeIndex: null,
      inventoryEditActive: false,
      catalogEditActive: false
    };
  }

  handleActiveItem(index) {
    this.setState({
      containsActiveItem: true,
      activeIndex: index
    });
  }
  recenterMap(lat, lng) {
    this.setState({
      lat: lat,
      lng: lng
    });
  }
  updateInventory() {
    this.setState({
      inventoryEditActive: true
    });
  }
  cancelUpdate() {
    this.setState({
      inventoryEditActive: false
    });
  }
  editCatalog() {
    this.setState({
      catalogEditActive: true
    })
  }
  cancelEditCatalog() {
    this.setState({
      catalogEditActive: false
    })
  }
  loadLocationData() {
    const locationRef = firebase.database().ref('stores/Walgreen\'s');
    locationRef.on('value', (snapshot) => {
      let locationSnapshot = snapshot.val();
      console.log(locationSnapshot);
    });
  }
  componentDidMount() {
    // Get users GPS coords
    // this.getCoords();
    this.loadLocationData();
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
        {/* <Header></Header> */}
        <div className="app__row">
          <CardList
            storeLocations={{data}}
            // storeLocations={this.loadLocationData}
            containsActiveItem={false}
            activeIndex={this.state.activeIndex}
            activeHandler={this.handleActiveItem}
            centerHandler={this.recenterMap}
            updateInventory={this.updateInventory}
          />
          <StoreMapContainer
            center={
              {
                lat: this.state.lat,
                lng: this.state.lng
              }
            }
            storeLocations={{ data }}
          />
        </div>
        {this.state.inventoryEditActive &&
          <EditInventory handleCancel={this.cancelUpdate} />
        }
        {this.state.catalogEditActive &&
          <EditCatalog handleCancel={this.cancelEditCatalog} />
        }
      </div>
    );
  }
}

export default App;
