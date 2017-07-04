import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Icon from 'react-fontawesome'
import InfiniteScroll from 'react-infinite-scroller'
import PostCard from '../components/PostCard'
import styles from '../styles/PostListContent.scss'

const PostListContent = (props) => {
  const loader = (
    <div className="loader">
      <Icon name="circle-o-notch" spin />
    </div>
  )
  return (
    <div id="post_list_content" styleName="container">
      <InfiniteScroll
        hasMore={props.hasMore}
        loader={loader}
        loadMore={props.loadMore}
        useWindow={false}>
        {props.posts.map((post, key) => {
          return <PostCard key={key} post={post} handleClick={props.handleClick} />
        })}
      </InfiniteScroll>
    </div>
  )
}

PostListContent.propTypes = {
  posts: PropTypes.arrayOf(PropTypes.object).isRequired,
  hasMore: PropTypes.bool.isRequired,
  loadMore: PropTypes.func.isRequired,
  handleClick: PropTypes.func.isRequired
}

export default CSSModules(PostListContent, styles)
