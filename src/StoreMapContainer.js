import React from 'react';
import StoreMap from './StoreMap';

class StoreMapContainer extends React.Component {

  selectedStore(id) {
    console.log(id);
  }

  render() {
    return (
      <StoreMap
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyCsTBbhmOk9BtjxzO5mBzpUWnMVV1LuNTQ&v=3.exp&libraries=geometry,drawing,places'}
        mapCenter = {this.props.center}
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