import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as channelsActions from '../actions/channelsActions'
import * as postsActions from '../actions/postsActions'
import * as usersActions from '../actions/usersActions'
import Channels from '../components/Channels'
import ChannelUsers from '../components/ChannelUsers'
import Posts from '../components/Posts'
import endpoints from '../config/endpoints'

class Channel extends Component {
  componentWillMount() {
    this.fetch(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id == nextProps.match.params.id) {
      return
    }
    this.fetch(nextProps)
  }

  fetch(props) {
    const {
      currentUser,
      match,
      fetchPosts,
      fetchChannelUsers,
      fetchChannels
    } = props

    fetchPosts(currentUser, endpoints.channelPosts(match.params.id))
    fetchChannels(currentUser)
    fetchChannelUsers(currentUser, endpoints.channelUsers(match.params.id))
  }

  render() {
    const { channels, posts, users } = this.props
    return (
      <div>
        <Channels channels={channels} />
        <ChannelUsers users={users} />
        <Posts posts={posts} />
      </div>
    )
  }
}

Channel.propTypes = {
  match: PropTypes.object.isRequired,
  channels: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  fetchChannelUsers: PropTypes.func.isRequired,
  fetchChannels: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    currentUser: state.currentUser,
    posts: state.posts,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...channelsActions,
    ...postsActions,
    ...usersActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
