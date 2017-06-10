import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as postActions from '../actions/postActions'
import * as postsActions from '../actions/postsActions'
import Nav from '../containers/Nav'
import Post from '../containers/Post'
import PostList from '../containers/PostList'
import endpoints from '../config/endpoints'
import styles from '../styles/Channel.scss'

class Channel extends Component {
  componentWillMount() {
    this.fetchPosts(this.props)
    this.props.unsetPost()
  }

  componentWillReceiveProps(nextProps) {
    if (this.props.match.params.id == nextProps.match.params.id) {
      return
    }
    this.fetchPosts(nextProps)
  }

  fetchPosts(props) {
    this.props.fetchPosts(endpoints.channelPosts(props.match.params.id))
  }

  render() {
    return (
      <div styleName="container">
        <Nav />
        <PostList />
        <Post />
      </div>
    )
  }
}

Channel.propTypes = {
  match: PropTypes.object.isRequired,
  fetchPosts: PropTypes.func.isRequired,
  unsetPost: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...postActions, ...postsActions }, dispatch)
}

Channel = CSSModules(Channel, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
