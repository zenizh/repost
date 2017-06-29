import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import Markdown from './Markdown'
import styles from '../styles/PostPreview.scss'

const PostPreview = (props) => {
  const content = props.editor.state.getCurrentContent().getPlainText()
  return (
    <div styleName="container">
      <Markdown content={content} />
    </div>
  )
}

PostPreview.propTypes = {
  editor: PropTypes.shape({
    state: PropTypes.object.isRequired
  }).isRequired
}

export default CSSModules(PostPreview, styles)
