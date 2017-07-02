import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as channelActions from '../actions/channelActions'
import * as channelsActions from '../actions/channelsActions'
import * as usersActions from '../actions/usersActions'
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
    this.props.clearUsers()
  }

  render() {
    const { channel, channels, users } = this.props
    return (
      <div styleName="container">
        <NavMenu channel={channel} />
        <ChannelList channel={channel} channels={channels} />
        <UserList users={users} />
      </div>
    )
  }
}

NavContent.propTypes = {
  channel: PropTypes.object.isRequired,
  channels: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  fetchChannels: PropTypes.func.isRequired,
  clearChannel: PropTypes.func.isRequired,
  clearUsers: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    channel: state.channel,
    channels: state.channels,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...channelActions, ...channelsActions, ...usersActions }, dispatch)
}

NavContent = CSSModules(NavContent, styles)

export default connect(mapStateToProps, mapDispatchToProps)(NavContent)
