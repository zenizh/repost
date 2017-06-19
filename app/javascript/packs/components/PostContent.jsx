import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Markdown from './Markdown'
import Star from './Star'
import styles from '../styles/PostContent.scss'

const PostContent = (props) => {
  const { post, createStar, deleteStar } = props
  return (
    <div styleName="container">
      <div styleName="user">
        <img src={post.user.avatar} />
        {post.user.name}
        <span>(@{post.user.screenName})</span>
      </div>
      <span styleName="created_on">Posted on {post.createdOn}</span>
      <Markdown content={post.content} />
      <span styleName="created_at">{post.createdAt}</span>
      <Star post={post} createStar={createStar} deleteStar={deleteStar} />
    </div>
  )
}

PostContent.propTypes = {
  post: PropTypes.object.isRequired,
  createStar: PropTypes.func.isRequired,
  deleteStar: PropTypes.func.isRequired
}

export default CSSModules(PostContent, styles)
