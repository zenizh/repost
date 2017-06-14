import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Star from './Star'
import styles from '../styles/PostContent.scss'

const PostContent = (props) => {
  const { post, setStar, unsetStar } = props
  return (
    <div styleName="container">
      <div styleName="user">
        <img src={post.user.avatar} />
        {post.user.name}
        <span>(@{post.user.screenName})</span>
      </div>
      <span styleName="created_on">Posted on {post.createdOn}</span>
      <p>{post.content}</p>
      <span styleName="created_at">{post.createdAt}</span>
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
