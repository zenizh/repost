import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as authorizeActions from '../actions/authorizeActions'
import * as editorActions from '../actions/editorActions'
import * as postActions from '../actions/postActions'
import Nav from '../containers/Nav'
import PostForm from '../components/PostForm'
import PostPreview from '../components/PostPreview'
import styles from '../styles/EditPost.scss'
import endpoints from '../config/endpoints'

class EditPost extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.authorizeAuthor(this.props.match.params.id)
    this.props.fetchPost(endpoints.mePost(this.props.match.params.id))
  }

  handleSubmit() {
    const { match, editor, updatePost } = this.props
    updatePost(endpoints.mePost(match.params.id), editor.state)
  }

  render() {
    const { editor, setEditorState } = this.props
    return (
      <div styleName="container">
        <Nav />
        <PostForm
          editor={editor}
          handleSubmit={this.handleSubmit}
          setEditorState={setEditorState} />
        <PostPreview editor={editor} />
      </div>
    )
  }
}

EditPost.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.shape({
      id: PropTypes.string.isRequired
    }).isRequired
  }).isRequired,
  editor: PropTypes.object.isRequired,
  authorizeAuthor: PropTypes.func.isRequired,
  fetchPost: PropTypes.func.isRequired,
  setEditorState: PropTypes.func.isRequired,
  updatePost: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    editor: state.editor
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...authorizeActions, ...editorActions, ...postActions }, dispatch)
}

EditPost = CSSModules(EditPost, styles)

export default connect(mapStateToProps, mapDispatchToProps)(EditPost)
