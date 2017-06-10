import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/Star.scss'

const Star = (props) => {
  const { post, setStar, unsetStar } = props

  let star = null

  if (post.starred) {
    star = <Icon name="star" onClick={() => unsetStar(post)} />
  } else {
    star = <Icon name="star-o" onClick={() => setStar(post)} />
  }

  return (
    <span styleName="container">
      {star}
    </span>
  )
}

Star.propTypes = {
  post: PropTypes.object.isRequired,
  setStar: PropTypes.func.isRequired,
  unsetStar: PropTypes.func.isRequired
}

export default CSSModules(Star, styles)
