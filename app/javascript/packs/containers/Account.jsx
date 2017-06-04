import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as postsActions from '../actions/postsActions'
import Posts from '../components/Posts'
import endpoints from '../config/endpoints'

class Account extends Component {
  componentWillMount() {
    this.props.fetchPosts(endpoints.mePosts)
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
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(postsActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Account)
