import React, { Component } from 'react';

class Card extends Component {
  render() {
    return (
      <div className="card">
        {this.props.thisLocStreetNum}
        {this.props.thisLocStreetName}
      </div>
    )
  }
}

export default Card;