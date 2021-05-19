import React, { Component } from "react";
import { connect } from "react-redux";
class Users extends Component {
  renderUsers = () => {
    return this.props.users.map((user) => {
      return <li key={user.username}>{user.username}</li>;
    });
  };
  render() {
    return (
      <div>
        <ul>
          {this.props.userCount} Users!
          {this.renderUsers()}
        </ul>
      </div>
    );
  }
}

const mapStateToProps = (state) => {
  return { users: state.users, userCount: state.users.length };
};

// connect this component to Redux
export default connect(mapStateToProps)(Users);
