import React from 'react';
import Card from './Card';

class CardList extends React.Component {
  constructor(props) {
    super(props);
    this.handleActiveItem = this.handleActiveItem.bind(this);
    this.state = {
      containsActiveItem: false,
      activeIndex: null
    }
  }

  handleActiveItem(index) {
    this.setState({
      containsActiveItem: true,
      activeIndex: index
    });
  }

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
            thisStoreId={loc.storeId}
            thisStoreStock={loc.inventory}
            isActive = { i === this.state.activeIndex ? true : false }
            onActiveChange={this.handleActiveItem}
          />
        )}
      </div>
    )
  }
}

export default CardList;