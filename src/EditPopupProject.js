import React, { Component } from 'react';
import PropTypes from 'prop-types';
import './App.css';

class EditPopupProject extends Component {
  state = {
    title: this.props.toEdit.title,
    description: this.props.toEdit.description,
    create: this.props.toEdit.creator
  };

  handleTitleChange = (e) => {
    this.setState({title: e.target.value});
  }

  handleDescriptionChange = (e) => {
    this.setState({description: e.target.value});
  }

  handleCreatorChange = (e) => {
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
    this.props.edit({
      title: this.state.title,
      description: this.state.description,
      creator: this.state.creator,
      _id: this.props.toEdit._id
    });
    this.emptyState();
  }

  render() {
    return (
      <div className="Popup">
        <form onSubmit={this.submitHandler} className='Form'>
            <h3>Edit user</h3>
            <div className='Form-Input'>
            <label htmlFor='name'>Project title</label>
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
                    type='text'
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
            <input className='Form-Add' type='submit' value='Edit' />
        </form>
      </div>
    );
  }
}

EditPopupProject.propTypes = {
  edit: PropTypes.func.isRequired,
  toEdit: PropTypes.object.isRequired,
  users: PropTypes.array.isRequired
};

export default EditPopupProject;