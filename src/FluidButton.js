import React from 'react';
import { Button } from 'semantic-ui-react';

class FluidButton extends React.Component {
  render() {
    const onPress = this.props;
    return (
      <Button primary fluid onClick={onPress}>{this.props.text}</Button>
    )
  }
}

export default FluidButton;