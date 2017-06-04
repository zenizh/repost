import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as channelsActions from '../actions/channelsActions'
import * as postsActions from '../actions/postsActions'
import Channels from '../components/Channels'
import PostForm from '../components/PostForm'
import Posts from '../components/Posts'
import endpoints from '../config/endpoints'

class Home extends Component {
  componentWillMount() {
    const { currentUser, fetchChannels, fetchPosts } = this.props
    fetchPosts(currentUser, endpoints.posts)
    fetchChannels(currentUser)
  }

  onSubmit(values) {
    const { currentUser, createPost } = this.props
    createPost(currentUser, values.content)
  }

  render() {
    const { channels, currentUser, posts } = this.props
    return (
      <div>
        <Channels channels={channels} />
        <PostForm currentUser={currentUser} onSubmit={this.onSubmit.bind(this)} />
        <Posts posts={posts} />
      </div>
    )
  }
}

Home.propTypes = {
  channels: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  createPost: PropTypes.func.isRequired,
  fetchChannels: PropTypes.func.isRequired,
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

export default connect(mapStateToProps, mapDispatchToProps)(Home)
