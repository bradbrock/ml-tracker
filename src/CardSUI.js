import React from 'react';
import { Card, Feed, Icon } from 'semantic-ui-react';
import './Card.css';
import EditInventory from './EditInventory';

class CardSUI extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.editCard = this.editCard.bind(this);
    this.state = {
      inventoryEditActive: false
    }
  }
  handleClick(e) {
    e.preventDefault();
    this.props.onSelect(this.props.index);
    this.props.newCoords(this.props.thisLat, this.props.thisLng);
  }
  editCard(e) {
    e.preventDefault();
    // console.log("editCard fired");
    this.props.editCard();
  }
  render() {
    return (
      <Card
        className={`${(this.props.isActive) ? 'is-active' : ''}`}
        id={this.props.thisStoreId}
        onClick={this.handleClick}
      >
        <Card.Content extra>
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
          {this.state.inventoryEditActive &&
            <EditInventory handleCancel={this.cancelUpdate} />
          }
        </Card.Content>
      </Card>
    )
  }
}

export default CardSUI;