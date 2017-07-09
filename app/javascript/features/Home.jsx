import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as channelActions from '../actions/channelActions'
import * as channelUsersActions from '../actions/channelUsersActions'
import * as postActions from '../actions/postActions'
import * as postsActions from '../actions/postsActions'
import Nav from '../containers/Nav'
import Post from '../containers/Post'
import PostList from '../containers/PostList'
import endpoints from '../config/endpoints'
import styles from '../styles/Home.scss'

class Home extends Component {
  constructor(props) {
    super(props)
    this.loadMore = this.loadMore.bind(this)
  }

  componentDidMount() {
    this.props.setChannel({ name: 'All', icon: 'bars' })
    this.props.fetchHomeUsers()
    this.props.clearPost()
    this.props.clearPosts()
    this.props.enableFetchPosts()
  }

  loadMore(page) {
    this.props.fetchPosts(endpoints.posts, page)
  }

  render() {
    return (
      <div styleName="container">
        <Nav />
        <PostList loadMore={this.loadMore} />
        <Post />
      </div>
    )
  }
}

Home.propTypes = {
  clearPost: PropTypes.func.isRequired,
  clearPosts: PropTypes.func.isRequired,
  enableFetchPosts: PropTypes.func.isRequired,
  fetchHomeUsers: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  setChannel: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...channelActions, ...channelUsersActions, ...postActions, ...postsActions }, dispatch)
}

Home = CSSModules(Home, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
