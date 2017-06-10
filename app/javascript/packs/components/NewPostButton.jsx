import React from 'react'
import { Button } from 'reactstrap'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/NewPostButton.scss'

const NewPostButton = (props) => {
  return (
    <Button color="primary" styleName="container">
      <Icon name="pencil" /> New Post
    </Button>
  )
}

export default CSSModules(NewPostButton, styles)
