import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as channelsActions from '../actions/channelsActions'
import * as usersActions from '../actions/usersActions'
import ChannelList from '../components/ChannelList'
import UserList from '../components/UserList'
import styles from '../styles/NavContent.scss'

class NavContent extends Component {
  componentWillMount() {
    this.props.fetchChannels()
    this.props.fetchUsers()
  }

  render() {
    const { channels, currentChannel, users } = this.props
    return (
      <div styleName="container">
        <ChannelList channels={channels} currentChannel={currentChannel} />
        <UserList users={users} />
      </div>
    )
  }
}

NavContent.propTypes = {
  channels: PropTypes.array.isRequired,
  currentChannel: PropTypes.string,
  users: PropTypes.array.isRequired,
  fetchChannels: PropTypes.func.isRequired,
  fetchUsers: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...channelsActions, ...usersActions }, dispatch)
}

NavContent = CSSModules(NavContent, styles)

export default connect(mapStateToProps, mapDispatchToProps)(NavContent)
