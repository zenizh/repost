import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import classNames from 'classnames'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/NavMenu.scss'

const NavMenu = (props) => {
  return (
    <div styleName="container">
      <ul>
        <li styleName={classNames({ active: (props.channel.name == 'All') })}>
          <Link to="/"><Icon name="bars" /> All</Link>
        </li>
        <li styleName={classNames({ active: (props.channel.name == 'Starred') })}>
          <Link to="/starred"><Icon name="star" /> Starred</Link>
        </li>
      </ul>
    </div>
  )
}

NavMenu.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string
  }).isRequired
}

export default CSSModules(NavMenu, styles)
