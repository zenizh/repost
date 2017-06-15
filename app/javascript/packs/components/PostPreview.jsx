import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../styles/PostPreview.scss'

// TODO: Replace markdown renderer with remark when it adapts to ES6
// See https://github.com/wooorm/remark/pull/262
import Markdown from 'react-remarkable'

const PostPreview = (props) => {
  const content = props.editor.state.getCurrentContent().getPlainText()
  return (
    <div styleName="container">
      <Markdown source={content} />
    </div>
  )
}

PostPreview.propTypes = {
  editor: PropTypes.object.isRequired
}

export default CSSModules(PostPreview, styles)
