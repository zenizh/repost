import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as channelActions from '../actions/channelActions'
import * as postActions from '../actions/postActions'
import * as postsActions from '../actions/postsActions'
import * as userActions from '../actions/userActions'
import Nav from '../containers/Nav'
import Post from '../containers/Post'
import PostList from '../containers/PostList'
import endpoints from '../config/endpoints'
import styles from '../styles/User.scss'

class User extends Component {
  constructor(props) {
    super(props)
    this.loadMore = this.loadMore.bind(this)
  }

  componentDidMount() {
    this.props.fetchUser(this.props.match.params.id)
    this.props.clearPost()
    this.props.clearPosts()
    this.props.enableFetchPosts()
  }

  componentWillReceiveProps(nextProps) {
    this.props.setChannel({ name: nextProps.user.name, icon: 'user' })
  }

  loadMore(page) {
    this.props.fetchPosts(endpoints.userPosts(this.props.match.params.id), page)
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

User.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  clearPost: PropTypes.func.isRequired,
  clearPosts: PropTypes.func.isRequired,
  enableFetchPosts: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  fetchUser: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    user: state.user
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...channelActions, ...postActions, ...postsActions, ...userActions }, dispatch)
}

User = CSSModules(User, styles)

export default connect(mapStateToProps, mapDispatchToProps)(User)
