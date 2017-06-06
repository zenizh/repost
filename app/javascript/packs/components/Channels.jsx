import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/Channels.scss'

class Channels extends Component {
  render() {
    return (
      <ul className="list-unstyled ml-3" styleName="container">
        <li className="mb-1">
          <Link to="/"><Icon name="bars" /> All</Link>
        </li>
        {this.props.channels.map((channel, key) => {
          const to = `/channels/${channel.id}`
          return (
            <li key={key} className="mb-1">
              <Link to={to}><Icon name="tag" /> {channel.name}({channel.usersCount})</Link>
            </li>
          )
        })}
      </ul>
    )
  }
}

Channels.propTypes = {
  channels: PropTypes.array.isRequired
}

Channels = CSSModules(Channels, styles)

export default Channels
