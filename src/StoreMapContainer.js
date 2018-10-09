import React from 'react';
import StoreMap from './StoreMap';
import data from './data/locations.json';

export default class StoreMapContainer extends React.Component {

  state = {
    location: this.props.location
  }

  componentDidUpdate(prevProps) {
    if ( this.props.location !== prevProps.location) {
      this.setState({
        location: this.props.location
      })
    }
    // console.log(prevProps);
  }

  render() {
    return (
      <StoreMap
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyCsTBbhmOk9BtjxzO5mBzpUWnMVV1LuNTQ&v=3.exp&libraries=geometry,drawing,places'}
        location = {this.state.location}
        loadingElement={ <div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: `600px`, width: `600px` }} />}
        mapElement={<div style={{ height: `100%` }} />}
        markerData={{ data }}
      />
    )
  }
}