import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as serviceActions from '../actions/serviceActions'
import Nav from '../containers/Nav'
import SettingsNav from '../components/SettingsNav'
import ServiceForm from '../components/ServiceForm'
import styles from '../styles/EditService.scss'
import endpoints from '../config/endpoints'

class EditService extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  componentDidMount() {
    this.props.fetchService(endpoints.service(this.props.match.params.id))
  }

  handleSubmit(values) {
    this.props.updateService(endpoints.service(this.props.match.params.id), values)
  }

  render() {
    return (
      <div styleName="container">
        <Nav />
        <SettingsNav />
        <ServiceForm initialValues={this.props.service} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

EditService.propTypes = {
  service: PropTypes.object.isRequired,
  fetchService: PropTypes.func.isRequired,
  updateService: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    service: state.service
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(serviceActions, dispatch)
}

EditService  = CSSModules(EditService, styles)

export default connect(mapStateToProps, mapDispatchToProps)(EditService)
