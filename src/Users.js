function searchAll(callback) {
    return fetch('api/users', {
        accept: 'application/json'
    }).then((response) => {
        return response.json();
    }).then(callback);
}

function createUser(user, callback) {
    return fetch('/api/user', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.name,
        age: user.age,
        type: user.type
      })
    }).then(searchAll(callback));
}

function deleteUser(id, callback) {
    return fetch('/api/user/' + id, {
      method: 'DELETE'
    }).then(searchAll(callback));
}

function editUser(user, callback) {
    return fetch('/api/user/' + user._id, {
      method: 'PUT',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: user.name,
        age: user.age,
        type: user.type
      })
    }).then(searchAll(callback));
}

const Users = { searchAll, createUser, deleteUser, editUser };
export default Users;