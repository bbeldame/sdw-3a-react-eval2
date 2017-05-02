import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class AddUser extends Component {
  state = {
    name: '',
    age: '',
    type: ''
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
    this.props.addUser({
      name: this.state.name,
      age: this.state.age,
      type: this.state.type
    });
    this.emptyState();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className='Form'>
        <h3>Add a new user</h3>
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
          <label htmlFor='age'>User age</label>
          <input
            id='age'
            type='number'
            value={this.state.age}
            onChange={this.handleAgeChange}
          />
        </div>
        <div className='Form-Input'>
          <label htmlFor='type'>User type</label>
          <input
            id='type'
            type='text'
            value={this.state.type}
            onChange={this.handleTypeChange}
          />
        </div>
        <input className='Form-Add' type='submit' value='Add' />
      </form>
    );
  }
}

AddUser.propTypes = {
  addUser: PropTypes.func.isRequired
};

export default AddUser;