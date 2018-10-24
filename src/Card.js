import React, { Component } from 'react';

class Card extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    this.props.onSelect(this.props.index);
    this.props.newCoords(this.props.thisLat, this.props.thisLng);
  }
  editCard(e) {
    e.preventDefault();
  }
  render() {
    return (
      <a
        className={`card ${(this.props.isActive) ? 'is-active' : ''}`}
        id={this.props.thisStoreId}
        onClick={this.handleClick}
        href=""
      >
        <p className="card__address-line">{this.props.thisLocStreetNum} {this.props.thisLocStreetName}</p>
        <p className="card__address-line">{this.props.thisLocCity}, {this.props.thisLocState} {this.props.thisLocZip}</p>
        <div className="card__inventory">
          { this.props.thisStoreStock.map((item, i) =>
            <div key={i}>
              <div>{item.itemName}</div>
              <div>{item.itemCount}</div>
            </div>
          )}
        </div>
        {this.props.isActive &&
          <button>edit</button>
        }
      </a>
    )
  }
}

export default Card;