import React, { Component } from 'react';

class Panel extends Component {
  constructor(props) {
    super(props);

    this.state = { users: [] }
  }
  componentDidMount() {
    fetch('/users')
      .then(res => res.json())
      .then(users => this.setState({ users }));
  }
  render() {
    return (
      <div>
        {this.state.users.map(user =>
          <div key={user.id}>{user.username}</div>
        )}
      </div>
    )
  }
}

export default Panel;