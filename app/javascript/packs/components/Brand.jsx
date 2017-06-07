import React, { Component } from 'react'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader, ModalBody, ModalFooter } from 'reactstrap'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import EditTeam from './EditTeam'
import styles from '../styles/Brand.scss'

class Brand extends Component {
  constructor(props) {
    super(props)
    this.state = { modal: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ modal: !this.state.modal })
  }

  render() {
    return (
      <div className="mb-4 px-3" styleName="container">
        <UncontrolledDropdown>
          <DropdownToggle caret color="link" className="btn-block text-white text-left" styleName="toggle">
            Repose
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Team Menu</DropdownItem>
            <span onClick={this.toggle} className="dropdown-item">Manage</span>
          </DropdownMenu>
        </UncontrolledDropdown>
        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static">
          <ModalHeader toggle={this.toggle}>Manage a Team</ModalHeader>
          <ModalBody>
            <EditTeam />
          </ModalBody>
          <ModalFooter>
            <Button color="secondary" onClick={this.toggle}>Cancel</Button>
            <Button color="success"><Icon name="check" /> Save</Button>
          </ModalFooter>
        </Modal>
      </div>
    )
  }
}

Brand = CSSModules(Brand, styles)

export default Brand
