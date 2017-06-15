import React from 'react'
import { Link } from 'react-router-dom'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/NewPostButton.scss'

const NewPostButton = (props) => {
  return (
    <Link to="/posts/new" className="btn btn-primary" styleName="container">
      <Icon name="pencil" /> New Post
    </Link>
  )
}

export default CSSModules(NewPostButton, styles)
