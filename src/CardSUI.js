import React from 'react';
import { Card, Feed, Button } from 'semantic-ui-react';
import './Card.css';
// import EditInventory from './EditInventory';
// import FluidButton from './FluidButton.js';

class CardSUI extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.editInventory = this.editInventory.bind(this);
    this.fooTest = this.fooTest.bind(this);
    this.state = {
      inventoryEditActive: false
    }
  }
  handleClick(e) {
    e.preventDefault();
    this.props.onSelect(this.props.index);
    this.props.newCoords(this.props.thisLat, this.props.thisLng);
  }
  editInventory(e) {
    e.preventDefault();
    var theState = this.state.inventoryEditActive;
    console.log(theState)
    if (this.state.inventoryEditActive === false ) {
      this.setState({
        inventoryEditActive: true
      })
    }
  }
  fooTest(e) {
    e.preventDefault();
    console.log("The foo test");
  }

  render() {
    return (
      <Card
        className={`${(this.props.isActive) ? 'is-active' : ''}`}
        id={this.props.thisStoreId}
      >
        <Card.Content extra as='a' href='#' onClick={ this.handleClick }>
          <Card.Header>Walgreen's</Card.Header>
          {this.props.thisLocStreetNum} {this.props.thisLocStreetName}.<br />
          {this.props.thisLocCity}, {this.props.thisLocState} {this.props.thisLocZip}
        </Card.Content>
        <Card.Content>
          <Feed>
            { this.props.thisStoreStock.map((item, i) =>
              <Feed.Event key={i}>
                <Feed.Label image='http://placehold.it/40' />
                <Feed.Content>
                  <Feed.Summary>{item.itemName}</Feed.Summary>
                  <Feed.Extra>{item.itemCount} in stock</Feed.Extra>
                </Feed.Content>
              </Feed.Event>
            )}
          </Feed>
        </Card.Content>
        <Card.Content extra>
          {/* <Feed.Date content='1 day ago' /> */}
          <Button primary fluid onClick={this.editInventory}>Update</Button>
        </Card.Content>
      </Card>
    )
  }
}

export default CardSUI;