import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as channelsActions from '../actions/channelsActions'
import ChannelList from '../components/ChannelList'
import UserList from '../components/UserList'
import styles from '../styles/NavContent.scss'

class NavContent extends Component {
  componentWillMount() {
    this.props.fetchChannels()
  }

  render() {
    const { channel, channels, users } = this.props
    return (
      <div styleName="container">
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
  fetchChannels: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    channel: state.channel,
    channels: state.channels,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(channelsActions, dispatch)
}

NavContent = CSSModules(NavContent, styles)

export default connect(mapStateToProps, mapDispatchToProps)(NavContent)
