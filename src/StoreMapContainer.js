import React from 'react';
import StoreMap from './StoreMap';

class StoreMapContainer extends React.Component {

  // componentDidUpdate(prevProps) {
  //   if ( this.props.location !== prevProps.location) {
  //     this.setState({
  //       location: this.props.location
  //     })
  //   }
  // }

  selectedStore(id) {
    // const selectedStore = document.getElementById(id)
    console.log(id);
  }
  // handleFoo(foo) {
  //   this.setState({myFoo: foo });
  // }

  render() {
    // const foo = this.props.location;
    // console.log(foo);
    return (
      <StoreMap
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyCsTBbhmOk9BtjxzO5mBzpUWnMVV1LuNTQ&v=3.exp&libraries=geometry,drawing,places'}
        location = {this.props.location}
        loadingElement={ <div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: `600px`, width: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markerData={ this.props.storeLocations }
        onMarkerSelected={id => this.selectedStore(id)}
      />
    )
  }
}

export default StoreMapContainer;