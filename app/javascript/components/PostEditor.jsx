import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Editor } from 'draft-js'
import CSSModules from 'react-css-modules'
import styles from '../styles/PostEditor.scss'

class PostEditor extends Component {
  constructor(props) {
    super(props)
    this.onChange = this.onChange.bind(this)
  }

  onChange(editorState) {
    this.props.setEditorState(editorState)
  }

  render() {
    return (
      <div className="form-control" styleName="container">
        <Editor editorState={this.props.editor.state} onChange={this.onChange} />
      </div>
    )
  }
}

PostEditor.propTypes = {
  editor: PropTypes.shape({
    state: PropTypes.object.isRequied
  }).isRequired,
  setEditorState: PropTypes.func.isRequired
}

export default CSSModules(PostEditor, styles)
