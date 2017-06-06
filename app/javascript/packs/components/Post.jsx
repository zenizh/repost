import React, { Component } from 'react'
import CSSModules from 'react-css-modules'
import styles from '../styles/Post.scss'

class Post extends Component {
  render() {
    return (
      <div className="p-3 bg-white" styleName="container">
        <h3>Post</h3>
      </div>
    )
  }
}

Post = CSSModules(Post, styles)

export default Post
