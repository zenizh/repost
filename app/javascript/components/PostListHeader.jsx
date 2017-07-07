import React from 'react'
import CSSModules from 'react-css-modules'
import PostListChannel from '../containers/PostListChannel'
import PostListUsers from '../containers/PostListUsers'
import styles from '../styles/PostListHeader.scss'

const PostListHeader = (props) => {
  return (
    <div id="post_list_header" styleName="container">
      <PostListChannel />
      <div styleName="right">
        <PostListUsers />
      </div>
    </div>
  )
}

export default CSSModules(PostListHeader, styles)
