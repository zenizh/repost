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
import styles from '../styles/Home.scss'

class Home extends Component {
  componentWillMount() {
    this.props.setChannel({ name: 'all' })
    this.props.fetchPosts(endpoints.posts)
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

Home.propTypes = {
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

Home = CSSModules(Home, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
