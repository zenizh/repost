import React from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/PostListHeader.scss'

const PostListHeader = (props) => {
  return (
    <div styleName="container">
      #{props.channel.name}
      <div styleName="right">
        <Icon name="user" /> {(props.users.length > 0) ? props.users.length : null}
      </div>
    </div>
  )
}

PostListHeader.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  users: PropTypes.array.isRequired
}

export default CSSModules(PostListHeader, styles)
