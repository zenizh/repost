import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as channelsActions from '../actions/channelsActions'
import * as postsActions from '../actions/postsActions'
import Channels from '../components/Channels'
import PostForm from '../components/PostForm'
import Posts from '../components/Posts'
import endpoints from '../lib/endpoints'

class Home extends Component {
  componentWillMount() {
    const { currentUser, fetchCurrentUserChannels, fetchPosts } = this.props
    fetchPosts(currentUser, endpoints.posts)
    fetchCurrentUserChannels(currentUser)
  }

  render() {
    const { channels, currentUser, posts, registerPost } = this.props
    return (
      <div>
        <Channels channels={channels} />
        <PostForm currentUser={currentUser} registerPost={registerPost} />
        <Posts posts={posts} />
      </div>
    )
  }
}

Home.propTypes = {
  channels: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  registerPost: PropTypes.func.isRequired
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
