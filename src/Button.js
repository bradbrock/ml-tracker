import React from 'react';
import { Button } from 'semantic-ui-react';

class MyButton extends React.Component {
  render() {
    return (
      <Button primary>{this.props.text}</Button>
    )
  }
}

export default MyButton;