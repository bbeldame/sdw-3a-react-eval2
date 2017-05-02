import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class EditPopupUser extends Component {
  state = {
    name: this.props.toEdit.name,
    age: this.props.toEdit.age,
    type: this.props.toEdit.type
  };

  handleNameChange = (e) => {
    this.setState({name: e.target.value});
  }

  handleAgeChange = (e) => {
    this.setState({age: e.target.value});
  }

  handleTypeChange = (e) => {
    this.setState({type: e.target.value});
  }

  emptyState = () => {
    this.setState({
      name: '',
      age: '',
      type: ''
    });
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.edit({
      _id: this.props.toEdit._id,
      name: this.state.name,
      age: this.state.age,
      type: this.state.type
    });
    this.emptyState();
  }

  render() {
    return (
      <div className="Popup">
        <form onSubmit={this.submitHandler} className='Form'>
            <h3>Edit user</h3>
            <div className='Form-Input'>
            <label htmlFor='name'>User name</label>
            <input
                id='name'
                type='text'
                value={this.state.name}
                onChange={this.handleNameChange}
            />
            </div>
            <div className='Form-Input'>
            <label htmlFor='name'>User age</label>
            <input
                id='age'
                type='number'
                value={this.state.age}
                onChange={this.handleAgeChange}
            />
            </div>
            <div className='Form-Input'>
            <label htmlFor='name'>User type</label>
            <input
                id='type'
                type='text'
                value={this.state.type}
                onChange={this.handleTypeChange}
            />
            </div>
            <input className='Form-Add' type='submit' value='Edit' />
        </form>
      </div>
    );
  }
}

EditPopupUser.propTypes = {
  edit: PropTypes.func.isRequired,
  toEdit: PropTypes.object.isRequired
};

export default EditPopupUser;