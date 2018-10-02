import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap } from "react-google-maps";

const StoreMap = withScriptjs(withGoogleMap((props) => {

  return (
    <GoogleMap
      defaultZoom={14}
      // center= {{lat: 42.3601, lng: -71.0589}}
      // location={{lat: doctor.closestPractice.lat, lng: doctor.closestPractice.lon}}
      center = { props.location }
    />
  )

}))

export default StoreMap;