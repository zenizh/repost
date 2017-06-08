import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem, Modal, ModalHeader } from 'reactstrap'
import CSSModules from 'react-css-modules'
import EditTeam from './EditTeam'
import styles from '../styles/Brand.scss'

class Brand extends Component {
  constructor(props) {
    super(props)
    this.state = { modal: false }
    this.toggle = this.toggle.bind(this)
    this.onSubmit = this.onSubmit.bind(this)
  }

  toggle() {
    this.setState({ modal: !this.state.modal })
  }

  onSubmit(values) {
    this.props.setTeam(values)
  }

  render() {
    const { team, services } = this.props
    return (
      <div className="mb-4 px-3" styleName="container">
        <UncontrolledDropdown>
          <DropdownToggle caret color="link" className="btn-block text-white text-left" styleName="toggle">
            {team.name}
          </DropdownToggle>
          <DropdownMenu>
            <DropdownItem header>Team Menu</DropdownItem>
            <span onClick={this.toggle} className="dropdown-item">Manage</span>
          </DropdownMenu>
        </UncontrolledDropdown>
        <Modal isOpen={this.state.modal} toggle={this.toggle} backdrop="static">
          <ModalHeader toggle={this.toggle}>Manage a Team</ModalHeader>
          <EditTeam team={team} services={services} toggleModal={this.toggle} onSubmit={this.onSubmit} />
        </Modal>
      </div>
    )
  }
}

Brand.propTypes = {
  team: PropTypes.object.isRequired,
  services: PropTypes.array.isRequired,
  setTeam: PropTypes.func.isRequired
}

Brand = CSSModules(Brand, styles)

export default Brand
