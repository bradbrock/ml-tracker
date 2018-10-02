import React, { Component } from 'react';
import PropTypes from 'prop-types';

class UserLocation extends Component {

  constructor(props) {
    super(props);
    // this.handleClick = this.handleClick.bind(this);
  }

  componentDidMount() {
    this.getCoords();
  }

  getCoords = (props) => {
    navigator.geolocation.getCurrentPosition(
      // (position) => console.log(position.coords.latitude + " " + position.coords.longitude),
      (position) => this.test(position),
      (error) => console.log(error)
    );
  }

  test = (data) => {
    console.log(data);
  }

  // setCoords(x, y) {
  setCoords = (x, y) => {
    console.log(x);
    console.log(y);
    // this.setState({
    //   lat: x,
    //   lng: y
    // });
  }

  // function handleClick(e) {
  handleClick = (e) => {
    e.preventDefault();
    this.getCoords();
  }

  render() {
    return (
      <div>
        <button id="getLocation" onClick={this.handleClick}>Get Location</button>
      </div>
    )

  }
}

export default UserLocation;