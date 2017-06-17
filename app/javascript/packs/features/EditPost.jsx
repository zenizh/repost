import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as authorizeActions from '../actions/authorizeActions'
import * as postActions from '../actions/postActions'
import Nav from '../containers/Nav'
import PostForm from '../containers/PostForm'
import PostPreview from '../components/PostPreview'
import styles from '../styles/EditPost.scss'
import endpoints from '../config/endpoints'

class EditPost extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentWillMount() {
    this.props.authorizeAuthor(this.props.match.params.id)
    this.props.fetchPost(endpoints.mePost(this.props.match.params.id))
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.redirect.enabled) {
      this.props.redirectTo(nextProps.redirect.url)
    }
  }

  handleSubmit() {
    const { match, editor, updatePost } = this.props
    updatePost(endpoints.mePost(match.params.id), editor.state)
  }

  render() {
    return (
      <div styleName="container">
        <Nav />
        <PostForm handleSubmit={this.handleSubmit} />
        <PostPreview editor={this.props.editor} />
      </div>
    )
  }
}

EditPost.propTypes = {
  editor: PropTypes.object.isRequired,
  redirect: PropTypes.object.isRequired,
  authorizeAuthor: PropTypes.func.isRequired,
  redirectTo: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    editor: state.editor,
    redirect: state.redirect
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...authorizeActions, ...postActions }, dispatch)
}

EditPost = CSSModules(EditPost, styles)

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
