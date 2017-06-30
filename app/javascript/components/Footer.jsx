import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import CSSModules from 'react-css-modules'
import styles from '../styles/Footer.scss'

const Footer = (props) => {
  return (
    <UncontrolledDropdown dropup styleName="container">
      <DropdownToggle caret color="link" className="btn-block">
        <img src={props.currentUser.avatar} />
        {props.currentUser.name}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>User Menu</DropdownItem>
        <Link to="/account/edit" className="dropdown-item">Account Settings</Link>
        <a href="https://github.com/kami-zh/repost/issues/new" target="_blank" className="dropdown-item">Feedback</a>
        <DropdownItem divider />
        <Link to="/sign_out" className="dropdown-item">Sign Out</Link>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

Footer.propTypes = {
  currentUser: PropTypes.shape({
    name: PropTypes.string.isRequired,
    avatar: PropTypes.string.isRequired
  }).isRequired
}

export default CSSModules(Footer, styles)
