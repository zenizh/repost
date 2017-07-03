import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import PostCard from '../components/PostCard'
import styles from '../styles/PostListContent.scss'

const PostListContent = (props) => {
  return (
    <div id="post_list_content" styleName="container">
      {props.posts.map((post, key) => {
        return <PostCard key={key} post={post} handleClick={props.handleClick} />
      })}
    </div>
  )
}

PostListContent.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  handleClick: PropTypes.func.isRequired
}

export default CSSModules(PostListContent, styles)
