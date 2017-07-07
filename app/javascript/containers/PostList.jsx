import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as postActions from '../actions/postActions'
import PostListHeader from '../components/PostListHeader'
import PostListContent from '../components/PostListContent'
import styles from '../styles/PostList.scss'

class PostList extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  handleClick(post) {
    this.props.setPost(post)
  }

  render() {
    const { app, channel, channelUsers, posts, loadMore } = this.props
    return (
      <div styleName="container">
        <PostListHeader channel={channel} channelUsers={channelUsers} />
        <PostListContent
          posts={posts}
          handleClick={this.handleClick}
          hasMore={app.hasMore}
          loadMore={loadMore} />
      </div>
    )
  }
}

PostList.propTypes = {
  app: PropTypes.shape({
    hasMore: PropTypes.bool.isRequired
  }).isRequired,
  channel: PropTypes.object,
  channelUsers: PropTypes.array,
  posts: PropTypes.array.isRequired,
  loadMore: PropTypes.func.isRequired,
  setPost: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    app: state.app,
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(postActions, dispatch)
}

PostList = CSSModules(PostList, styles)

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
