import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import { Authorization } from '../containers/Authorization'
import Star from './Star'
import styles from '../styles/PostHeader.scss'

const PostHeader = (props) => {
  const { post, handleClick, createStar, deleteStar } = props
  return (
    <div className="clearfix" styleName="container">
      <Star post={post} createStar={createStar} deleteStar={deleteStar} />
      <Authorization type="author" post={post}>
        <div styleName="right">
          <Link to={`/posts/${post.id}/edit`}><Icon name="pencil" /></Link>
          <a id="delete_post" onClick={() => handleClick(post.id)}><Icon name="trash" /></a>
        </div>
      </Authorization>
    </div>
  )
}

PostHeader.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number
  }).isRequired,
  handleClick: PropTypes.func.isRequired,
  createStar: PropTypes.func.isRequired,
  deleteStar: PropTypes.func.isRequired
}

export default CSSModules(PostHeader, styles)
