import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as channelsActions from '../actions/channelsActions'
import * as teamActions from '../actions/teamActions'
import Header from '../components/Header'
import NewPostButton from '../components/NewPostButton'
import ChannelList from '../components/ChannelList'
import Footer from '../components/Footer'
import styles from '../styles/Nav.scss'

class Nav extends Component {
  componentWillMount() {
    this.props.fetchChannels()
    this.props.fetchTeam()
  }

  render() {
    const { channels, currentChannel, currentUser, team } = this.props
    return (
      <div styleName="container">
        <Header team={team} />
        <NewPostButton />
        <ChannelList channels={channels} currentChannel={currentChannel} />
        <Footer currentUser={currentUser} />
      </div>
    )
  }
}

Nav.propTypes = {
  channels: PropTypes.array.isRequired,
  currentChannel: PropTypes.string,
  currentUser: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired,
  fetchChannels: PropTypes.func.isRequired,
  fetchTeam: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    currentUser: state.currentUser,
    team: state.team
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...channelsActions, ...teamActions }, dispatch)
}

Nav = CSSModules(Nav, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
