import React, { Component } from 'react';

class UserLocation extends Component {
  render() {
    function handleClick(e) {
      e.preventDefault();
      navigator.geolocation.getCurrentPosition(function(position) {
        // doSomething(position.coords.latitude, position.coords.longitude);
        console.log(position);
      });
    }
    return (
      <button id="getLocation" onClick={handleClick}>Get Location</button>
    )
  }
}

export default UserLocation;