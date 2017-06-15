import React from 'react'
import PropTypes from 'prop-types'
import remark from 'remark'
import reactRenderer from 'remark-react'

const Markdown = (props) => {
  return (
    <div>
      {remark().use(reactRenderer).processSync(props.content).contents}
    </div>
  )
}

Markdown.propTypes = {
  content: PropTypes.string
}

export default Markdown
