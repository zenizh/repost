import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules'
import * as postsActions from '../actions/postsActions'
import Nav from './Nav'
import Posts from '../components/Posts'
import Post from '../components/Post'
import endpoints from '../config/endpoints'
import styles from '../styles/Channel.scss'

class Channel extends Component {
  componentWillMount() {
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
    return (
      <div className="d-flex" styleName="container">
        <Nav />
        <Posts posts={this.props.posts} />
        <Post />
      </div>
    )
  }
}

Channel.propTypes = {
  match: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  fetchPosts: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(postsActions, dispatch)
}

Channel = CSSModules(Channel, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Channel)
