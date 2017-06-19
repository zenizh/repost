import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/PostHeader.scss'

const PostHeader = (props) => {
  return (
    <div styleName="container">
      <Link to={`/posts/${props.post.id}/edit`}><Icon name="pencil" /></Link>
      <a onClick={() => props.onClick(props.post.id)}><Icon name="trash" /></a>
    </div>
  )
}

PostHeader.propTypes = {
  post: PropTypes.object.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CSSModules(PostHeader, styles)
