function searchAll(callback) {
    return fetch('api/projects', {
        accept: 'application/json'
    }).then((response) => {
        return response.json();
    }).then(callback);
}

function createProject(project, callback) {
    console.log(project);
    return fetch('/api/project', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: project.title,
        description: project.description,
        _creator: project.creator
      })
    }).then(searchAll(callback));
}

function deleteProject(id, callback) {
    return fetch('/api/project/' + id, {
      method: 'DELETE'
    }).then(searchAll(callback));
}

function editProject(project, callback) {
    console.log(project);
    return fetch('/api/project/' + project._id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        title: project.title,
        description: project.description,
        _creator: project.creator
      })
    }).then(searchAll(callback));
}

const Projects = { searchAll, createProject, deleteProject, editProject };
export default Projects;