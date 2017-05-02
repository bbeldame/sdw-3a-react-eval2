import React, { Component } from 'react';
import './App.css';
import Users from './Users';
import Projects from './Projects';
import AddUser from './AddUser';
import AddProject from './AddProject';
import EditPopupUser from './EditPopupUser';
import EditPopupProject from './EditPopupProject';

class App extends Component {
  state = {
    users: [],
    projects: [],
    editUser: null,
    editProject: null
  };

  componentDidMount() {
    this.searchUsers();
    this.searchProjects();
  }

  searchUsers = () => {
    Users.searchAll((users) => {
      console.log(users);
      this.setState({users});
    });
  };

  searchProjects = () => {
    Projects.searchAll((projects) => {
      this.setState({projects});
    });
  };

  addProject = (project) => {
    Projects.createProject(project, (projects) => {
      this.setState({projects});
    });
  }

  addUser = (User) => {
    Users.createUser(User, (users) => {
      this.setState({users});
    });
  }

  deleteProject = (id) => {
    Projects.deleteProject(id, (projects) => {
      this.setState({projects});
    });
  }

  editProject = (project) => {
    Projects.editProject(project, (projects) => {
      this.setState({editProject: null, projects})
    });
  }

  deleteUser = (id) => {
    Users.deleteUser(id, (users) => {
      this.setState({users});
    });
  }

  editUser = (user) => {
    Users.editUser(user, (users) => {
      this.setState({editUser: null, users})
    });
  }

  displayEditPopupUser = (user) => {
    this.setState({editUser: user});
  }

  displayEditPopupProject = (project) => {
    this.setState({editProject: project});
  }

  render() {
    const usersList = this.state.users.map((user) =>
      <div className="User" key={user._id}>
        <button type="button" onClick={() => {this.deleteUser(user._id)}}>Delete !</button>
        {user.name} -- {user.age} -- {user.type}
        {<button type="button" onClick={() => {this.displayEditPopupUser(user)}}>Edit !</button>}
      </div>
    );

    const projectsList = this.state.projects.map((project) =>
      <div className="Project" key={project._id}>
        <button type="button" onClick={() => {this.deleteProject(project._id)}}>Delete !</button>
        {project.title} -- {project.description}
        {<button type="button" onClick={() => {this.displayEditPopupProject(project)}}>Edit !</button>}
      </div>
    );

    return (
      <div className="App">
        {this.state.editUser ? <EditPopupUser edit={this.editUser} toEdit={this.state.editUser}/> : null}
        {this.state.editProject ? <EditPopupProject edit={this.editProject} toEdit={this.state.editProject} users={this.state.users}/> : null}
        <div className="App-header">
          <h2>Welcome to a Kickass app</h2>
        </div>
        <div className="Users-List">{usersList}</div>
        <AddUser addUser={this.addUser}/>
        <hr />
        <div className="Projects-List">{projectsList}</div>
        <AddProject users={this.state.users} addProject={this.addProject}/>
      </div>
    );
  }
}

export default App;
