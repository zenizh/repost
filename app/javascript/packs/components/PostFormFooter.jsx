import React from 'react'
import PropTypes from 'prop-types'
import { Button } from 'reactstrap'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/PostFormFooter.scss'

const PostFormFooter = (props) => {
  return (
    <div styleName="container">
      <Button type="submit" color="success" onClick={props.onSubmit}>
        <Icon name="check" /> Submit
      </Button>
    </div>
  )
}

PostFormFooter.propTypes = {
  onSubmit: PropTypes.func.isRequired
}

export default CSSModules(PostFormFooter, styles)
