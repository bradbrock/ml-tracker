import React, { Component } from 'react';
import StoreMap from './StoreMap';

export default class StoreMapContainer extends React.Component {
  render() {
    return (
      <StoreMap
        googleMapURL={'https://maps.googleapis.com/maps/api/js?key=AIzaSyCsTBbhmOk9BtjxzO5mBzpUWnMVV1LuNTQ&v=3.exp&libraries=geometry,drawing,places'}
        loadingElement={ <div style={{ height: '100%' }} />}
        containerElement={<div style={{ height: `600px`, width: `600px` }} />}
				mapElement={<div style={{ height: `100%` }} />}
      />
    )
  }
}