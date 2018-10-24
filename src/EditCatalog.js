import React from 'react';
import firebase from './firebase.js';
import './EditCatalog.css';

class EditCatalog extends React.Component {
  constructor() {
    super();
    this.state = {
      figureName : '',
      figureBaf : '',
      figureBafPiece : '',
      items: []
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
    const itemsRef = firebase.database().ref('catalog');
    const item = {
      figureName: this.state.figureName,
      figureBaf: this.state.figureBaf,
      figureBafPiece: this.state.figureBafPiece,
    }
    itemsRef.child(this.state.figureName).set({
      baf: this.state.figureBaf,
      bafPiece: this.state.figureBafPiece,
      year: 2015
    });
    this.setState({
      figureName: '',
      figureBaf: '',
      figureBafPiece: ''
    });
  }

  handleCancel(e) {
    e.preventDefault();
    this.props.handleCancel();
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('catalog');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          figureName: item,
          figureBaf: items[item].title,
          figureBafPiece: items[item].user
        })
      }
      this.setState({
        items: newState
      });
    });
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