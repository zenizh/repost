import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as postActions from '../actions/postActions'
import { Authorization } from './Authorization'
import PostHeader from '../components/PostHeader'
import PostContent from '../components/PostContent'
import endpoints from '../config/endpoints'
import styles from '../styles/Post.scss'

class Post extends Component {
  constructor(props) {
    super(props)
    this.createStar = this.createStar.bind(this)
    this.deleteStar = this.deleteStar.bind(this)
  }

  createStar(post) {
    this.props.createStar(endpoints.postStars(post.id))
  }

  deleteStar(post) {
    this.props.deleteStar(endpoints.postStars(post.id))
  }

  render() {
    const { post } = this.props
    return (
      <div styleName="container">
        <Authorization type="author" post={post}>
          <PostHeader post={post} />
        </Authorization>
        <PostContent
          post={post}
          createStar={this.createStar}
          deleteStar={this.deleteStar} />
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  createStar: PropTypes.func.isRequired,
  deleteStar: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    post: state.post
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(postActions, dispatch)
}

Post = CSSModules(Post, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Post)
