import React from 'react'
import { Button } from 'reactstrap'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/PostFormFooter.scss'

const PostFormFooter = (props) => {
  return (
    <div styleName="container">
      <Button type="submit" color="success"><Icon name="check" /> Submit</Button>
    </div>
  )
}

export default CSSModules(PostFormFooter, styles)
