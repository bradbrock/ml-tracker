import React from 'react';
import { withScriptjs, withGoogleMap, GoogleMap, Marker } from "react-google-maps";


const StoreMap = withScriptjs(withGoogleMap((props) => {
  
  // { console.log(props.markerData.data[0].locations) }

  // { props.markerData.data[0].locations.map((i) => {
  //   console.log("lat " + i.lat)
  //   console.log("lng " + i.lng)
  // })}

  return (
    <GoogleMap
      defaultZoom={14}
      // center= {{lat: 42.3601, lng: -71.0589}}
      center = { props.location }
    >
      <Marker
        position={{ lat: 42.3601, lng: -71.0589 }}
        labelStyle={{backgroundColor: "yellow", fontSize: "32px", padding: "16px"}}
      />
      { props.markerData.data[0].locations.map((i) => {
        return (
          <Marker
            key={i}
            position={{ lat: i.lat, lng: i.lng }}
          />
        )
      })}
    </GoogleMap>
  )

}))

export default StoreMap;