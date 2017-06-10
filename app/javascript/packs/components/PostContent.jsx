import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Star from './Star'
import styles from '../styles/PostContent.scss'

const PostContent = (props) => {
  const { post, setStar, unsetStar } = props
  return (
    <div styleName="container">
      <span styleName="created_at">{post.createdAt}</span>
      <p styleName="content">{post.content}</p>
      <span>{post.user.name}(@{post.user.screenName})</span>
      <Star post={post} setStar={setStar} unsetStar={unsetStar} />
    </div>
  )
}

PostContent.propTypes = {
  post: PropTypes.object.isRequired,
  setStar: PropTypes.func.isRequired,
  unsetStar: PropTypes.func.isRequired
}

export default CSSModules(PostContent, styles)
