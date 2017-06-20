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

  componentWillReceiveProps(nextProps) {
    if (!this.props.post.id && (nextProps.posts.length > 0)) {
      this.props.setPost(nextProps.posts[0])
    }
  }

  handleClick(post) {
    this.props.setPost(post)
  }

  render() {
    return (
      <div styleName="container">
        <PostListHeader channel={this.props.channel} users={this.props.users} />
        <PostListContent posts={this.props.posts} handleClick={this.handleClick} />
      </div>
    )
  }
}

PostList.propTypes = {
  channel: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  users: PropTypes.array.isRequired,
  setPost: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    channel: state.channel,
    post: state.post,
    posts: state.posts,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(postActions, dispatch)
}

PostList = CSSModules(PostList, styles)

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
