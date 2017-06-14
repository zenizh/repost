import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBlock } from 'reactstrap'
import classNames from 'classnames'
import Truncate from 'react-truncate'
import CSSModules from 'react-css-modules'
import styles from '../styles/PostCard.scss'

const PostCard = (props) => {
  const { post, handleClick } = props
  const styleName = classNames('card', { selected: post.selected, starred: post.starred })
  return (
    <Card onClick={() => handleClick(post)} styleName={styleName}>
      <CardBlock styleName="block">
        <div styleName="user">
          <img src={post.user.avatar} />
          {post.user.name}
          <span>(@{post.user.screenName})</span>
        </div>
        <p><Truncate lines={2}>{post.content}</Truncate></p>
        <span styleName="created_at">{post.createdAt}</span>
      </CardBlock>
    </Card>
  )
}

PostCard.propTypes = {
  post: PropTypes.object.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default CSSModules(PostCard, styles, { allowMultiple: true })
