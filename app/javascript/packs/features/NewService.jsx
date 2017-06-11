import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as servicesActions from '../actions/servicesActions'
import Nav from '../containers/Nav'
import SettingsNav from '../components/SettingsNav'
import ServiceForm from '../components/ServiceForm'
import styles from '../styles/NewService.scss'

class NewService extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.service.saved) {
      this.props.history.push('/team/services')
    }
  }

  onSubmit(values) {
    this.props.createService(values)
  }

  render() {
    const initialValues = { name: 'Slack', type: 'SlackService' }
    return (
      <div styleName="container">
        <Nav />
        <SettingsNav />
        <ServiceForm initialValues={initialValues} onSubmit={this.onSubmit} />
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
  return bindActionCreators(servicesActions, dispatch)
}

NewService  = CSSModules(NewService, styles)

export default connect(mapStateToProps, mapDispatchToProps)(NewService)
