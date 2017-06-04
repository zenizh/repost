import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postsActions from '../actions/postsActions'
import Posts from '../components/Posts'
import endpoints from '../config/endpoints'

class Account extends Component {
  componentWillMount() {
    const { currentUser, fetchPosts } = this.props
    fetchPosts(currentUser, endpoints.mePosts)
  }

  render() {
    const { posts } = this.props
    return (
      <div>
        <h2>Account</h2>
        <Posts posts={posts} />
      </div>
    )
  }
}

Account.propTypes = {
  currentUser: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(postsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
