import React from 'react';
import Card from './Card';

class CardList extends React.Component {

  render() {
    
    return (
      <div className="card__list">
        { this.props.storeLocations.data[0].locations.map((loc, i) =>
          <Card
            key={i}
            index={i}
            thisLocStreetNum={loc.streetNumber}
            thisLocStreetName={loc.streetName}
            thisLocCity={loc.city}
            thisLocState={loc.state}
            thisLocZip={loc.zip}
            thisLat={loc.lat}
            thisLng={loc.lng}
            thisStoreId={loc.storeId}
            thisStoreStock={loc.inventory}
            isActive = { i === this.props.activeIndex ? true : false }
            onSelect={this.props.activeHandler}
          />
        )}
      </div>
    )
  }
}

export default CardList;