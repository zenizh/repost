import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBlock } from 'reactstrap'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import styles from '../styles/PostCard.scss'

const PostCard = (props) => {
  const { post, handleClick } = props
  const styleName = classNames('card', { selected: post.selected, starred: post.starred })
  return (
    <Card onClick={() => handleClick(post)} styleName={styleName}>
      <CardBlock>
        <span>{post.user.name}(@{post.user.screenName})</span>
        <p>{post.content}</p>
        <span>{post.createdAt}</span>
      </CardBlock>
    </Card>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default CSSModules(PostCard, styles, { allowMultiple: true })
