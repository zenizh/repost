import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import CSSModules from 'react-css-modules'
import styles from '../styles/Header.scss'

const Header = (props) => {
  return (
    <UncontrolledDropdown styleName="container">
      <DropdownToggle caret color="link" className="btn-block">
        {props.team.name}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Team Menu</DropdownItem>
        <Link to="/team/settings" className="dropdown-item">Settings</Link>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

Header.propTypes = {
  team: PropTypes.object.isRequired
}

export default CSSModules(Header, styles)
