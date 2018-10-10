import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        <p className="card__address-line">{this.props.thisLocStreetNum} {this.props.thisLocStreetName}</p>
        <p className="card__address-line">{this.props.thisLocCity} {this.props.thisLocState} {this.props.thisLocZip}</p>
      </div>
    )
  }
}

export default Card;