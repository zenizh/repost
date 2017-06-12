import React from 'react'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import styles from '../styles/SettingsNav.scss'

const SettingsNav = (props) => {
  return (
    <div styleName="container">
      <h3>Account Settings</h3>
      <ul>
        <li><Link to="/account/edit">Profile</Link></li>
      </ul>
      <h3>Team Settings</h3>
      <ul>
        <li><Link to="/team/settings">General Settings</Link></li>
        <li><Link to="/team/services">WebHooks</Link></li>
      </ul>
    </div>
  )
}

export default CSSModules(SettingsNav, styles)
