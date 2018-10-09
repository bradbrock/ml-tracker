import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const StoreMap = withScriptjs(withGoogleMap((props) => {

  return (
    <GoogleMap
      defaultZoom={14}
      center = { props.location }
    >
      <Marker
        position={{ lat: 42.3601, lng: -71.0589 }}
        labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
      />
      { props.markerData.data[0].locations.map((marker, i) => {
        return (
          <Marker
            key={i}
            position={{ lat: marker.lat, lng: marker.lng }}
          />
        )
      })}
    </GoogleMap>
  )

}))

export default StoreMap;