import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import classNames from 'classnames'
import styles from '../styles/Star.scss'

const Star = (props) => {
  const { post, setStar, unsetStar } = props
  return (
    <Icon
      name="star-o"
      onClick={post.starred ? (() => unsetStar(post)) : (() => setStar(post))}
      styleName={classNames('container', { active: post.starred })} />
  )
}

Star.propTypes = {
  post: PropTypes.object.isRequired,
  setStar: PropTypes.func.isRequired,
  unsetStar: PropTypes.func.isRequired
}

export default CSSModules(Star, styles, { allowMultiple: true })
