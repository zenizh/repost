import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as channelsActions from '../actions/channelsActions'
import * as postsActions from '../actions/postsActions'
import Channels from '../components/Channels'
import Posts from '../components/Posts'
import endpoints from '../lib/endpoints'

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
      fetchCurrentUserChannels,
    } = props

    fetchPosts(currentUser, endpoints.channelPosts(match.params.id))
    fetchCurrentUserChannels(currentUser)
  }

  render() {
    const { channels, posts } = this.props
    return (
      <div>
        <Channels channels={channels} />
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
  fetchPosts: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    currentUser: state.currentUser,
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...channelsActions,
    ...postsActions
  }, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
