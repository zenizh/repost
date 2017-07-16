import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as postActions from '../actions/postActions'
import * as reactionsActions from '../actions/reactionsActions'
import PostHeader from '../components/PostHeader'
import PostContent from '../components/PostContent'
import endpoints from '../config/endpoints'
import styles from '../styles/Post.scss'
import { withRouter } from 'react-router'

class Post extends Component {
  constructor(props) {
    super(props)
    this.createStar = this.createStar.bind(this)
    this.deleteStar = this.deleteStar.bind(this)
    this.handleChange = this.handleChange.bind(this)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.post.id && (nextProps.posts.length > 0)) {
      this.props.fetchReactions(nextProps.posts[0].id)
      this.props.setPost(nextProps.posts[0])
    }
  }

  createStar(post) {
    this.props.createStar(endpoints.postStars(post.id))
  }

  deleteStar(post) {
    this.props.deleteStar(endpoints.postStars(post.id))
  }

  handleChange(emoji) {
    this.props.createReaction(this.props.post.id, emoji.shortname)
  }

  handleClick(id) {
    if (window.confirm('Are you sure?')) {
      this.props.deletePost(endpoints.mePost(id), this.props.location.pathname)
    }
  }

  render() {
    const { post, reactions } = this.props
    return (
      <div styleName="container">
        <PostHeader
          post={post}
          handleClick={this.handleClick}
          createStar={this.createStar}
          deleteStar={this.deleteStar} />
        <PostContent
          post={post}
          reactions={reactions}
          handleChange={this.handleChange} />
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number
  }).isRequired,
  posts: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired,
  reactions: PropTypes.array.isRequired,
  createReaction: PropTypes.func.isRequired,
  createStar: PropTypes.func.isRequired,
  deletePost: PropTypes.func.isRequired,
  deleteStar: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    post: state.post,
    posts: state.posts,
    reactions: state.reactions
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...postActions, ...reactionsActions }, dispatch)
}

Post = CSSModules(Post, styles)

export default withRouter(connect(mapStateToProps, mapDispatchToProps)(Post))
