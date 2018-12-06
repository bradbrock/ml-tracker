import React from 'react';
import { Button } from 'semantic-ui-react';

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }
  handleClick(e) {
    e.preventDefault();
    console.log("clicked!");
  }
  render() {
    return (
      <header>
        <Button primary onClick={ this.handleClick }>Add to Catalog</Button>
      </header>
    )
  }
}

export default Header;