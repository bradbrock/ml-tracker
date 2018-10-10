import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  render() {
    return (
      <div className="card__list">
        { this.props.storeLocations.data[0].locations.map((loc, i) =>
          <Card key={i} thisLocStreetNum={loc.streetNumber} thisLocStreetName={loc.streetName} />
        )}
        {/* <Card storeLocations={this.props.storeLocations} /> */}
      </div>
    )
  }
}

export default CardList;