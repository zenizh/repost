import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as editorActions from '../actions/editorActions'
import * as postActions from '../actions/postActions'
import PostEditor from '../components/PostEditor'
import PostFormFooter from '../components/PostFormFooter'
import CSSModules from 'react-css-modules'
import styles from '../styles/PostForm.scss'

class PostForm extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit() {
    this.props.createPost(this.props.editor.state)
  }

  render() {
    const { editor, setEditorState } = this.props
    return (
      <div styleName="container">
        <PostEditor editor={editor} setEditorState={setEditorState} />
        <PostFormFooter onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

PostForm.propTypes = {
  editor: PropTypes.object.isRequired,
  setEditorState: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    editor: state.editor
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...editorActions, ...postActions }, dispatch)
}

PostForm = CSSModules(PostForm, styles)

export default connect(mapStateToProps, mapDispatchToProps)(PostForm)
