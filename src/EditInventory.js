import React from 'react';
import firebase from './firebase.js';
import './EditInventory.css';
// import { Form, Checkbox, Button } from 'semantic-ui-react';
import { Form, Checkbox, Button } from 'semantic-ui-react';

class EditInventory extends React.Component {
  constructor() {
    super();
    this.state = {
      currentItem: '',
      username: '',
      items: []
    }
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleCancel = this.handleCancel.bind(this);
  }
  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }
  handleSubmit(e) {
    e.preventDefault();
    const itemsRef = firebase.database().ref('items');
    const item = {
      title: this.state.currentItem,
      user: this.state.username
    }
    itemsRef.push(item);
    this.setState({
      currentItem: '',
      username: ''
    });
  }
  handleCancel(e) {
    e.preventDefault();
    this.props.handleCancel();
  }
  removeItem(itemId) {
    const itemRef = firebase.database().ref(`/items/${itemId}`);
    itemRef.remove();
  }

  componentDidMount() {
    const itemsRef = firebase.database().ref('items');
    itemsRef.on('value', (snapshot) => {
      let items = snapshot.val();
      let newState = [];
      for (let item in items) {
        newState.push({
          id: item,
          title: items[item].title,
          user: items[item].user
        })
      }
      this.setState({
        items: newState
      });
    });
  }

  render() {
    return (
      <div className="edit-inventory">
        <form onSubmit={this.handleSubmit} style={{display: 'none'}}>
          <input
            type="text"
            name="username"
            placeholder="User Name"
            onChange={this.handleChange}
            value={this.state.username}
          />
          <input
            type="text"
            name="currentItem"
            placeholder="Current Item"
            onChange={this.handleChange}
            value={this.state.currentItem}
          />
          <div className="edit-inventory__actions">
            <button>Add Item</button>
            <button onClick={this.handleCancel}>Cancel</button>
          </div>
        </form>
        <ul>
          {this.state.items.map((item) => {
            return (
              <li key={item.id}>
                <p>{item.title}</p>
                <p>{item.user}</p>
                <button onClick={() => this.removeItem(item.id)}>Remove</button>
              </li>
            )
          })}
        </ul>
      </div>
    )
  }
}

export default EditInventory;