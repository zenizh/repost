import React from 'react'
import PropTypes from 'prop-types'
import PostEditor from './PostEditor'
import PostFormFooter from './PostFormFooter'
import CSSModules from 'react-css-modules'
import styles from '../styles/PostForm.scss'

const PostForm = (props) => {
  const { editor, handleSubmit, setEditorState } = props
  return (
    <div styleName="container">
      <PostEditor editor={editor} setEditorState={setEditorState} />
      <PostFormFooter onSubmit={handleSubmit} />
    </div>
  )
}

PostForm.propTypes = {
  editor: PropTypes.object.isRequired,
  handleSubmit: PropTypes.func.isRequired,
  setEditorState: PropTypes.func.isRequired
}

export default CSSModules(PostForm, styles)
