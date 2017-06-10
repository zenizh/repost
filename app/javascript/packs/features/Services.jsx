import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as servicesActions from '../actions/servicesActions'
import Nav from '../containers/Nav'
import SettingsNav from '../components/SettingsNav'
import ServiceList from '../components/ServiceList'
import styles from '../styles/Services.scss'

class Services extends Component {
  componentWillMount() {
    this.props.fetchServices()
  }

  render() {
    return (
      <div styleName="container">
        <Nav />
        <SettingsNav />
        <ServiceList services={this.props.services} />
      </div>
    )
  }
}

Services.propTypes = {
  services: PropTypes.array.isRequired
}

function mapStateToProps(state) {
  return {
    services: state.services
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(servicesActions, dispatch)
}

Services  = CSSModules(Services, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Services)
