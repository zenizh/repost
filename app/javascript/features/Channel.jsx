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
import styles from '../styles/Channel.scss'

class Channel extends Component {
  constructor(props) {
    super(props)
    this.loadMore = this.loadMore.bind(this)
  }

  componentDidMount() {
    this.props.fetchChannel(endpoints.channel(this.props.match.params.id))
    this.props.fetchChannelUsers(this.props.match.params.id)
    this.props.clearPost()
    this.props.clearPosts()
    this.props.enableFetchPosts()
  }

  loadMore(page) {
    this.props.fetchPosts(endpoints.channelPosts(this.props.match.params.id), page)
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

Channel.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  clearPost: PropTypes.func.isRequired,
  clearPosts: PropTypes.func.isRequired,
  enableFetchPosts: PropTypes.func.isRequired,
  fetchChannel: PropTypes.func.isRequired,
  fetchChannelUsers: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...channelActions, ...channelUsersActions, ...postActions, ...postsActions }, dispatch)
}

Channel = CSSModules(Channel, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
