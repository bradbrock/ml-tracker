import React from 'react';
import { Card, Feed, Button, Icon, Input } from 'semantic-ui-react';
import './Card.css';
// import EditInventory from './EditInventory';
// import FluidButton from './FluidButton.js';

class CardSUI extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
    this.editInventory = this.editInventory.bind(this);
    this.state = {
      inventoryEditActive: false
    }
  }
  handleClick(e) {
    e.preventDefault();
    this.props.onSelect(this.props.index);
    this.props.newCoords(this.props.thisLat, this.props.thisLng);
  }
  handleChange(e, index, item) {
    e.preventDefault();
    console.log(index);
    // this.props.thisStoreStock.map((item, index) =>{
    //   console.log(item)
    // })
    // console.log( this.props.thisStoreStock[item] );
  }
  editInventory(e) {
    e.preventDefault();
    if (this.state.inventoryEditActive === false ) {
      this.setState({
        inventoryEditActive: true
      })
    } else {
      this.setState({
        inventoryEditActive: false
      })
    }
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
                  <Feed.Extra>
                    { !this.state.inventoryEditActive ? (
                      item.itemCount
                    ) : (
                      <Input type='number' size='mini' defaultValue={ item.itemCount } onChange={this.handleChange} />
                    )}
                    <span> in stock</span>
                  </Feed.Extra>
                </Feed.Content>
                {/* <Feed.Label>
                  <Icon name='pencil' />
                </Feed.Label> */}
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