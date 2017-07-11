import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import { Link } from 'react-router-dom'
import { emojify } from 'react-emojione'
import Markdown from './Markdown'
import styles from '../styles/PostContent.scss'

const PostContent = (props) => {
  const { post, reactions } = props

  if (!post.content) {
    return (
      <div styleName="content">
        <p>No post found.</p>
      </div>
    )
  }

  return (
    <div id="post_content" styleName="container">
      <div styleName="content">
        <Link to={'/users/' + post.user.id} styleName="user">
          <img src={post.user.avatar} />
          {post.user.name}
          <span>(@{post.user.screenName})</span>
        </Link>
        <Markdown content={post.content} />
        <span styleName="created_at">{post.createdAt}</span>
        <div styleName="reactions">
          {reactions.map((reaction, key) => {
            const color = reaction.isReacted ? 'warning' : 'secondary'
            return (
              <span
                key={key}
                className={classNames('btn', `btn-outline-${color}`)}
                styleName="reaction">
                {emojify(reaction.name, { style: { height: 18 } })}
                {reaction.count}
              </span>
            )
          })}
        </div>
      </div>
    </div>
  )
}

PostContent.propTypes = {
  post: PropTypes.shape({
    content: PropTypes.string,
    createdAt: PropTypes.string,
    user: PropTypes.shape({
      id: PropTypes.number,
      screenName: PropTypes.string,
      name: PropTypes.string,
      avatar: PropTypes.string
    }).isRequired
  }).isRequired,
  reactions: PropTypes.arrayOf(PropTypes.shape({
    name: PropTypes.string.isRequired,
    count: PropTypes.number.isRequired,
    isReacted: PropTypes.bool.isReacted
  })).isRequired
}

export default CSSModules(PostContent, styles, { allowMultiple: true })
