import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as channelActions from '../actions/channelActions'
import * as postActions from '../actions/postActions'
import * as postsActions from '../actions/postsActions'
import Nav from '../containers/Nav'
import Post from '../containers/Post'
import PostList from '../containers/PostList'
import endpoints from '../config/endpoints'
import styles from '../styles/Starred.scss'

class Starred extends Component {
  componentDidMount() {
    this.props.setChannel({ name: 'Starred', icon: 'star' })
    this.props.fetchPosts(endpoints.mePostsStarred)
    this.props.clearPost()
  }

  render() {
    return (
      <div styleName="container">
        <Nav />
        <PostList />
        <Post />
      </div>
    )
  }
}

Starred.propTypes = {
  clearPost: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  setChannel: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...channelActions, ...postActions, ...postsActions }, dispatch)
}

Starred = CSSModules(Starred, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Starred)
