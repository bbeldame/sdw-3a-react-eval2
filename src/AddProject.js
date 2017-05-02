import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class AddProject extends Component {
  state = {
    title: '',
    description: '',
    creator: ''
  };

  handleTitleChange = (e) => {
    this.setState({title: e.target.value});
  }

  handleDescriptionChange = (e) => {
    this.setState({description: e.target.value});
  }

  handleCreatorChange = (e) => {
      console.log(e.target.value);
    this.setState({creator: e.target.value});
  }

  emptyState = () => {
    this.setState({
      title: '',
      description: '',
      creator: ''
    });
  }

  submitHandler = (e) => {
    e.preventDefault();
    this.props.addProject({
      title: this.state.title,
      description: this.state.description,
      creator: this.state.creator
    });
    this.emptyState();
  }

  render() {
    return (
      <form onSubmit={this.submitHandler} className='Form'>
        <h3>Add a new project</h3>
        <div className='Form-Input'>
          <label htmlFor='title'>Title</label>
          <input
            id='title'
            type='text'
            value={this.state.title}
            onChange={this.handleTitleChange}
          />
        </div>
        <div className='Form-Input'>
          <label htmlFor='description'>Description</label>
          <input
            id='description'
            type='test'
            value={this.state.description}
            onChange={this.handleDescriptionChange}
          />
        </div>
        <div className='Form-Input'>
          <label htmlFor='creator'>Creator</label>
          <select ref="userInput" defaultValue="" onChange={this.handleCreatorChange} required>
            <option value="" disabled>Creator</option>
            {
                this.props.users.map(function(user) {
                    return <option key={user._id}
                    value={user._id}>{user.name}</option>;
                })
            }
        </select>
        </div>
        <input className='Form-Add' type='submit' value='Add' />
      </form>
    );
  }
}

AddProject.propTypes = {
  addProject: PropTypes.func.isRequired,
  users: PropTypes.array.isRequired
};

export default AddProject;