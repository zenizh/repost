import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from '../styles/Star.scss'

const Star = (props) => {
  const { post, createStar, deleteStar } = props

  if (!post.id) {
    return null
  }

  return (
    <Icon
      name="star-o"
      id="star_post"
      onClick={post.starred ? (() => deleteStar(post)) : (() => createStar(post))}
      styleName={classNames('container', { active: post.starred })} />
  )
}

Star.propTypes = {
  post: PropTypes.shape({
    id: PropTypes.number,
    starred: PropTypes.bool.isRequired
  }).isRequired,
  createStar: PropTypes.func.isRequired,
  deleteStar: PropTypes.func.isRequired
}

export default CSSModules(Star, styles, { allowMultiple: true })
