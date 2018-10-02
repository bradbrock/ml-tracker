import React, { Component } from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const StoreMap = withScriptjs(withGoogleMap((props) => {

  return (
    <GoogleMap
      defaultZoom={14}
      center= {{lat: 32.9382684, lng: -96.7448969}}
    />
  )

}))

export default StoreMap;