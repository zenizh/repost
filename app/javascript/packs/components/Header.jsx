import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap'
import CSSModules from 'react-css-modules'
import { Authorization, Unauthorization } from '../containers/Authorization'
import styles from '../styles/Header.scss'

const Header = (props) => {
  return (
    <UncontrolledDropdown styleName="container">
      <DropdownToggle caret color="link" className="btn-block">
        {props.team.name}
      </DropdownToggle>
      <DropdownMenu>
        <DropdownItem header>Team Menu</DropdownItem>
        <Authorization type="owner">
          <Link to="/team/settings" className="dropdown-item">Team Settings</Link>
        </Authorization>
        <Unauthorization type="owner">
          <DropdownItem disabled>Settings</DropdownItem>
        </Unauthorization>
      </DropdownMenu>
    </UncontrolledDropdown>
  )
}

Header.propTypes = {
  team: PropTypes.object.isRequired
}

export default CSSModules(Header, styles)
