import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as serviceActions from '../actions/serviceActions'
import * as servicesActions from '../actions/servicesActions'
import Nav from '../containers/Nav'
import SettingsNav from '../components/SettingsNav'
import ServiceList from '../components/ServiceList'
import styles from '../styles/Services.scss'
import endpoints from '../config/endpoints'

class Services extends Component {
  constructor(props) {
    super(props)
    this.handleClick = this.handleClick.bind(this)
  }

  componentDidMount() {
    this.props.fetchServices()
  }

  handleClick(id) {
    if (window.confirm('Are you sure?')) {
      this.props.deleteService(endpoints.service(id))
    }
  }

  render() {
    return (
      <div styleName="container">
        <Nav />
        <SettingsNav />
        <ServiceList services={this.props.services} onClick={this.handleClick} />
      </div>
    )
  }
}

Services.propTypes = {
  services: PropTypes.array.isRequired,
  fetchServices: PropTypes.func.isRequired,
  deleteService: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    services: state.services
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...serviceActions, ...servicesActions }, dispatch)
}

Services = CSSModules(Services, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Services)
