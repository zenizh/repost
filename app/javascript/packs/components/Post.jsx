import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/Post.scss'

class Post extends Component {
  render() {
    const { content, createdAt, user } = this.props.post
    return (
      <div className="py-5 px-5 bg-white" styleName="container">
        <div className="mx-auto" styleName="content">
          <span className="d-inline-block mb-4" styleName="post-created_at">{createdAt}</span>
          <p styleName="post-content">{content}</p>
          <span>{user.name}(@{user.screenName})</span>
        </div>
      </div>
    )
  }
}

Post = CSSModules(Post, styles)

export default Post
