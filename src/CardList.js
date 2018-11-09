import React from 'react';
import CardSUI from './CardSUI';

class CardList extends React.Component {

  render() {
    
    return (
      <div className="card__list">
        { this.props.storeLocations.data[0].locations.map((loc, i) =>
          <CardSUI
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
            newCoords={this.props.centerHandler}
            editCard={this.props.updateInventory}
          >
          </CardSUI>
        )}
      </div>
    )
  }
}

export default CardList;