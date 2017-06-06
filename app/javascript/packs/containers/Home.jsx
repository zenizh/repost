import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import CSSModules from 'react-css-modules'
import * as channelsActions from '../actions/channelsActions'
import * as postsActions from '../actions/postsActions'
import Nav from '../containers/Nav'
import Post from '../components/Post'
import Posts from '../components/Posts'
import endpoints from '../config/endpoints'
import styles from '../styles/Home.scss'

class Home extends Component {
  componentWillMount() {
    this.props.fetchPosts(endpoints.posts)
    this.props.fetchChannels()
  }

  onSubmit(values) {
    this.props.createPost(values.content)
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

Home.propTypes = {
  posts: PropTypes.array.isRequired,
  createPost: PropTypes.func.isRequired,
  fetchChannels: PropTypes.func.isRequired,
  fetchPosts: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    posts: state.posts
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({
    ...channelsActions,
    ...postsActions
  }, dispatch)
}

Home = CSSModules(Home, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Home)
