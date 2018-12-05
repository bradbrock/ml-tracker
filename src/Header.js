import React, { Component } from 'react';
import MyButton from './Button.js';

class Header extends React.Component {
  render() {
    return (
      <header>
        <MyButton text="Add to Catalog" />
      </header>
    )
  }
}

export default Header;