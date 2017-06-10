import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as postActions from '../actions/postActions'
import PostContent from '../components/PostContent'
import endpoints from '../config/endpoints'
import styles from '../styles/Post.scss'

class Post extends Component {
  constructor(props) {
    super(props)
    this.setStar = this.setStar.bind(this)
    this.unsetStar = this.unsetStar.bind(this)
  }

  setStar(post) {
    this.props.setStar(endpoints.postStars(post.id))
  }

  unsetStar(post) {
    this.props.unsetStar(endpoints.postStars(post.id))
  }

  render() {
    return (
      <div styleName="container">
        <PostContent
          post={this.props.post}
          setStar={this.setStar}
          unsetStar={this.unsetStar} />
      </div>
    )
  }
}

Post.propTypes = {
  post: PropTypes.object.isRequired,
  setStar: PropTypes.func.isRequired,
  unsetStar: PropTypes.func.isRequired
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
