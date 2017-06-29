import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as serviceActions from '../actions/serviceActions'
import Nav from '../containers/Nav'
import SettingsNav from '../components/SettingsNav'
import ServiceForm from '../components/ServiceForm'
import styles from '../styles/NewService.scss'

class NewService extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    this.props.createService(values)
  }

  render() {
    const initialValues = { name: 'Slack', type: 'SlackService' }
    return (
      <div styleName="container">
        <Nav />
        <SettingsNav />
        <ServiceForm initialValues={initialValues} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

NewService.propTypes = {
  createService: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    service: state.service
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(serviceActions, dispatch)
}

NewService  = CSSModules(NewService, styles)

export default connect(mapStateToProps, mapDispatchToProps)(NewService)
