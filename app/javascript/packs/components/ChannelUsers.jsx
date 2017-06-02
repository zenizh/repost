import React, { Component } from 'react'
import PropTypes from 'prop-types'

class ChannelUsers extends Component {
  user(user, key) {
    return (
      <div key={key}>
        <span>{user.name}(@{user.screenName})</span>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h3>ChannelUsers</h3>
        {this.props.users.map((user, key) => {
          return this.user(user, key)
        })}
      </div>
    )
  }
}

ChannelUsers.propTypes = {
  users: PropTypes.array.isRequired
}

export default ChannelUsers
