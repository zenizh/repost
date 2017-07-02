import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Markdown from './Markdown'
import styles from '../styles/PostContent.scss'

const PostContent = (props) => {
  const { post } = props

  if (!post.content) {
    return (
      <div styleName="content">
        <p>No post found.</p>
      </div>
    )
  }

  return (
    <div id="post_content" styleName="container">
      <div styleName="content">
        <div styleName="user">
          <img src={post.user.avatar} />
          {post.user.name}
          <span>(@{post.user.screenName})</span>
        </div>
        <Markdown content={post.content} />
        <span styleName="created_at">{post.createdAt}</span>
      </div>
    </div>
  )
}

PostContent.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string,
    createdAt: PropTypes.string,
    user: PropTypes.shape({
      screenName: PropTypes.string,
      name: PropTypes.string,
      avatar: PropTypes.string
    }).isRequired
  }).isRequired
}

export default CSSModules(PostContent, styles)
