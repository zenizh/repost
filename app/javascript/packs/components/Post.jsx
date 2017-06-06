import React, { Component } from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Star from './Star'
import styles from '../styles/Post.scss'

class Post extends Component {
  render() {
    const { post, setStar, unsetStar } = this.props
    const { content, createdAt, starred, user } = post
    return (
      <div className="py-5 px-5 bg-white" styleName="container">
        <div className="mx-auto" styleName="content">
          <span className="d-inline-block mb-4" styleName="post-created_at">{createdAt}</span>
          <p styleName="post-content">{content}</p>
          <span>{user.name}(@{user.screenName})</span>
          <div className="float-right">
            <Star post={post} setStar={setStar} unsetStar={unsetStar} />
          </div>
        </div>
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  setStar: PropTypes.func.isRequired,
  unsetStar: PropTypes.func.isRequired
}

Post = CSSModules(Post, styles)

export default Post
