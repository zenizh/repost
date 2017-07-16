import React from 'react'
import PropTypes from 'prop-types'
import { Card, CardBlock } from 'reactstrap'
import classNames from 'classnames'
import Truncate from 'react-text-truncate'
import CSSModules from 'react-css-modules'
import Icon from 'react-fontawesome'
import styles from '../styles/PostCard.scss'

const PostCard = (props) => {
  const { post, handleClick } = props
  const styleName = classNames('card', { selected: post.selected })
  return (
    <Card onClick={() => handleClick(post)} styleName={styleName}>
      <CardBlock styleName="block">
        <div styleName="user">
          <img src={post.user.avatar} />
          {post.user.name}
          <span>(@{post.user.screenName})</span>
        </div>
        <div styleName="content">
          <Truncate line={2} text={post.content} />
        </div>
        <span styleName="created_at">{post.createdAt}</span>
        <div styleName="icons">
          {post.starred ? <Icon name="star-o" styleName="star" /> : null}
          {post.reactionsCount > 0 ? (
            <span styleName={classNames('reaction', { active: post.isReacted })}>
              <Icon name="smile-o" /> {post.reactionsCount}
            </span>
          ) : null}
        </div>
      </CardBlock>
    </Card>
  )
}

PostCard.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string.isRequired,
    createdAt: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    reactionsCount: PropTypes.number.isRequired,
    starred: PropTypes.bool.isRequired,
    user: PropTypes.shape({
      screenName: PropTypes.string.isRequired,
      name: PropTypes.string.isRequired,
      avatar: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  handleClick: PropTypes.func.isRequired
}

export default CSSModules(PostCard, styles, { allowMultiple: true })
