import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules'
import * as postActions from '../actions/postActions'
import * as postsActions from '../actions/postsActions'
import Nav from './Nav'
import Post from '../components/Post'
import Posts from '../components/Posts'
import endpoints from '../config/endpoints'
import styles from '../styles/Channel.scss'

class Channel extends Component {
  componentWillMount() {
    this.props.unsetPost()
    this.fetch(this.props)
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id == nextProps.match.params.id) {
      return
    }
    this.fetch(nextProps)
  }

  fetch(props) {
    this.props.fetchPosts(endpoints.channelPosts(this.props.match.params.id))
  }

  render() {
    const { post, posts, setPost, setStar, unsetStar } = this.props
    return (
      <div className="d-flex" styleName="container">
        <Nav />
        <Posts post={post} posts={posts} setPost={setPost} />
        <Post post={post} setStar={setStar} unsetStar={unsetStar} />
      </div>
    )
  }
}

Channel.propTypes = {
  match: PropTypes.object.isRequired,
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  setPost: PropTypes.func.isRequired,
  unsetPost: PropTypes.func.isRequired,
  setStar: PropTypes.func.isRequired,
  unsetStar: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    post: state.post,
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...postActions,
    ...postsActions
  }, dispatch)
}

Channel = CSSModules(Channel, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
