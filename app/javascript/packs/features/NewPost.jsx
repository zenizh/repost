import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import Nav from '../containers/Nav'
import PostForm from '../containers/PostForm'
import PostPreview from '../components/PostPreview'
import styles from '../styles/NewPost.scss'

class NewPost extends Component {
  render() {
    return (
      <div styleName="container">
        <Nav />
        <PostForm />
        <PostPreview editor={this.props.editor} />
      </div>
    )
  }
}

NewPost.propTypes = {
  editor: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    editor: state.editor
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

NewPost = CSSModules(NewPost, styles)

export default connect(mapStateToProps, mapDispatchToProps)(NewPost)
