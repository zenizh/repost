import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/ChannelList.scss'

const channel = (channel, key) => {
  const to = `/channels/${channel.id}`
  return (
    <li key={key}>
      <Link to={to}><Icon name="tag" /> {channel.name}</Link>
    </li>
  )
}

const ChannelList = (props) => {
  return (
    <div styleName="container">
      <h3>Channels</h3>
      <ul>
        <li>
          <Link to="/"><Icon name="bars" /> All</Link>
        </li>
        {props.channels.map(channel)}
      </ul>
    </div>
  )
}

ChannelList.propTypes = {
  channels: PropTypes.array.isRequired
}

export default CSSModules(ChannelList, styles)
