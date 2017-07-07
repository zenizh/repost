import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as channelActions from '../actions/channelActions'
import * as channelsActions from '../actions/channelsActions'
import * as channelUsersActions from '../actions/channelUsersActions'
import ChannelList from '../components/ChannelList'
import NavMenu from '../components/NavMenu'
import UserList from '../components/UserList'
import styles from '../styles/NavContent.scss'

class NavContent extends Component {
  componentDidMount() {
    this.props.fetchChannels()
  }

  componentWillUnmount() {
    this.props.clearChannel()
    this.props.clearChannelUsers()
  }

  render() {
    const { channel, channels, channelUsers } = this.props
    return (
      <div styleName="container">
        <NavMenu channel={channel} />
        <ChannelList channel={channel} channels={channels} />
        <UserList channelUsers={channelUsers} />
      </div>
    )
  }
}

NavContent.propTypes = {
  channel: PropTypes.object.isRequired,
  channels: PropTypes.array.isRequired,
  channelUsers: PropTypes.array.isRequired,
  fetchChannels: PropTypes.func.isRequired,
  clearChannel: PropTypes.func.isRequired,
  clearChannelUsers: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    channel: state.channel,
    channels: state.channels,
    channelUsers: state.channelUsers
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...channelActions, ...channelsActions, ...channelUsersActions }, dispatch)
}

NavContent = CSSModules(NavContent, styles)

export default connect(mapStateToProps, mapDispatchToProps)(NavContent)
