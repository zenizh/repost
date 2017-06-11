import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { ButtonDropdown, DropdownToggle, DropdownMenu, DropdownItem, Table } from 'reactstrap'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/ServiceList.scss'

class ServiceList extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.service = this.service.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  service(service, key) {
    const { id, name, iconName, channel, onPost, onComment } = service
    const to = `/team/services/${id}/edit`
    return (
      <tr key={key}>
        <td><Icon name={iconName} /> {name}</td>
        <td>#{channel}</td>
        <td>{onPost ? <Icon name="check" /> : '-'}</td>
        <td>{onComment ? <Icon name="check" /> : '-'}</td>
        <td>
          <Link to={to}>Edit</Link>
          {' '}
          <a href="#" onClick={() => this.props.onClick(id)}>Delete</a>
        </td>
      </tr>
    )
  }

  render() {
    return (
      <div styleName="container">
        <div>
          <h2>WebHooks</h2>
          <Table bordered>
            <thead>
              <tr>
                <th>Service</th>
                <th>Channel</th>
                <th>Post</th>
                <th>Comment</th>
                <th></th>
              </tr>
            </thead>
            <tbody>
              {this.props.services.map(this.service)}
            </tbody>
          </Table>
          <ButtonDropdown isOpen={this.state.isOpen} toggle={this.toggle}>
            <DropdownToggle caret>
              Add a service
            </DropdownToggle>
            <DropdownMenu>
              <Link to="/team/services/new" className="dropdown-item"><Icon name="slack" /> Slack</Link>
            </DropdownMenu>
          </ButtonDropdown>
        </div>
      </div>
    )
  }
}

ServiceList.propTypes = {
  services: PropTypes.array.isRequired,
  onClick: PropTypes.func.isRequired
}

export default CSSModules(ServiceList, styles)
