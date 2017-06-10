import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from '../styles/ChannelList.scss'

const Channel = (channel, key, currentChannel) => {
  const to = `/channels/${channel.id}`
  return (
    <li key={key} styleName={classNames({ active: (channel.id == currentChannel) })}>
      <Link to={to}><Icon name="tag" /> {channel.name}</Link>
    </li>
  )
}

const ChannelList = (props) => {
  return (
    <div styleName="container">
      <h3>Channels</h3>
      <ul>
        <li styleName={classNames({ active: (props.currentChannel == 'all') })}>
          <Link to="/"><Icon name="bars" /> All</Link>
        </li>
        {props.channels.map((channel, key) => {
          return Channel(channel, key, props.currentChannel)
        })}
      </ul>
    </div>
  )
}

ChannelList.propTypes = {
  currentChannel: PropTypes.string,
  channels: PropTypes.array.isRequired
}

export default CSSModules(ChannelList, styles)
