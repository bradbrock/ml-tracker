import React from 'react';
import Card from './Card';
// import Input from './EditInventory';

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
            newCoords={this.props.centerHandler}
          />
        )}
        {/* <Input></Input> */}
      </div>
    )
  }
}

export default CardList;