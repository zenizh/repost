import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as postActions from '../actions/postActions'
import PostCard from '../components/PostCard'
import styles from '../styles/PostList.scss'

class PostList extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (!this.props.post.id) {
      this.props.setPost(nextProps.posts[0])
    }
  }

  handleClick(post) {
    this.props.setPost(post)
  }

  render() {
    const { handleClick } = this
    return (
      <div styleName="container">
        {this.props.posts.map((post, key) => {
          return <PostCard key={key} post={post} handleClick={handleClick} />
        })}
      </div>
    )
  }
}

PostList.propTypes = {
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  setPost: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    post: state.post,
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(postActions, dispatch)
}

PostList = CSSModules(PostList, styles)

export default connect(mapStateToProps, mapDispatchToProps)(PostList)
