import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as editorActions from '../actions/editorActions'
import PostEditor from '../components/PostEditor'
import PostFormFooter from '../components/PostFormFooter'
import CSSModules from 'react-css-modules'
import styles from '../styles/PostForm.scss'

class PostForm extends Component {
  render() {
    const { editor, setEditorState, handleSubmit } = this.props
    return (
      <div styleName="container">
        <PostEditor editor={editor} setEditorState={setEditorState} />
        <PostFormFooter onSubmit={handleSubmit} />
      </div>
    )
  }
}

PostForm.propTypes = {
  editor: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setEditorState: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    editor: state.editor
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(editorActions, dispatch)
}

PostForm = CSSModules(PostForm, styles)

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
