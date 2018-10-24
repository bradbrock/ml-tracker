import React from 'react';
import firebase from './firebase.js';
import './EditCatalog.css';

class EditCatalog extends React.Component {
  constructor() {
    super();
    this.state = {
      figureName : '',
      figureBaf : '',
      figureBafPiece : ''
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name] : e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
  }
  handleCancel(e) {
    e.preventDefault();
    this.props.handleCancel();
  }
  render() {
    return (
      <div className="edit-catalog">
        <form onSubmit={this.handleSubmit}>
          <input
            type="text"
            name="figureName"
            placeholder="Figure Name"
            value={this.state.figureName}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="figureBaf"
            placeholder="BaF"
            value={this.state.figureBaf}
            onChange={this.handleChange}
          />
          <input
            type="text"
            name="figureBafPiece"
            placeholder="BaF Piece"
            value={this.state.figureBafPiece}
            onChange={this.handleChange}
          />
          <button>submit</button>
          <button onClick={this.handleCancel}>cancel</button>
        </form>
      </div>
    );
  }
}

export default EditCatalog;