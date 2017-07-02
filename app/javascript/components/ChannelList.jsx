import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import ChannelListHeader from '../containers/ChannelListHeader'
import styles from '../styles/ChannelList.scss'

const ChannelList = (props) => {
  const currentChannel = props.channel
  return (
    <div styleName="container">
      <ChannelListHeader />
      <ul>
        {props.channels.map((channel, key) => {
          const to = `/channels/${channel.id}`
          return (
            <li key={key} styleName={classNames({ active: (channel.id == currentChannel.id) })}>
              <Link to={to}><Icon name="hashtag" /> {channel.name}</Link>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

ChannelList.propTypes = {
  channel: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string
  }).isRequired,
  channels: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default CSSModules(ChannelList, styles)
