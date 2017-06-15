import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import reactRenderer from 'remark-react'
import CSSModules from 'react-css-modules'
import styles from '../styles/PostPreview.scss'

const PostPreview = (props) => {
  const content = props.editor.state.getCurrentContent().getPlainText()
  return (
    <div styleName="container">
      {remark().use(reactRenderer).processSync(content).contents}
    </div>
  )
}

PostPreview.propTypes = {
  editor: PropTypes.object.isRequired
}

export default CSSModules(PostPreview, styles)
