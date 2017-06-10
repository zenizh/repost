import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as postActions from '../actions/postActions'
import * as postsActions from '../actions/postsActions'
import Nav from '../containers/Nav'
import Post from '../containers/Post'
import PostList from '../containers/PostList'
import endpoints from '../config/endpoints'
import styles from '../styles/Home.scss'

class Home extends Component {
  componentWillMount() {
    this.props.fetchPosts(endpoints.posts)
    this.props.unsetPost()
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
  fetchPosts: PropTypes.func.isRequired,
  unsetPost: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...postActions, ...postsActions }, dispatch)
}

Home = CSSModules(Home, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
