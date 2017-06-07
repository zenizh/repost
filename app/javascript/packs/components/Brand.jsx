import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import CSSModules from 'react-css-modules'
import styles from '../styles/Brand.scss'

class Brand extends Component {
  render() {
    return (
      <div className="mb-4 px-3" styleName="container">
        <UncontrolledDropdown>
          <DropdownToggle caret color="link" className="btn-block text-white text-left" styleName="toggle">
            Repose
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Team Menu</DropdownItem>
            <Link to="#" className="dropdown-item">Manage</Link>
          </DropdownMenu>
        </UncontrolledDropdown>
      </div>
    )
  }
}

Brand = CSSModules(Brand, styles)

export default Brand
