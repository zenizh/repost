import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

class Channels extends Component {
  render() {
    return (
      <div>
        <h3>Channels</h3>
        {this.props.channels.map((channel, key) => {
          const to = `/channels/${channel.id}`
          return <Link key={key} to={to}>{channel.name}({channel.usersCount})</Link>
        })}
      </div>
    )
  }
}

Channels.propTypes = {
  channels: PropTypes.array.isRequired
}

export default Channels
