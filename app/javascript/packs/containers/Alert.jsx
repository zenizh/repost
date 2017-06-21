import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Alert as AlertComponent } from 'reactstrap'
import CSSModules from 'react-css-modules'
import * as alertActions from '../actions/alertActions'
import styles from '../styles/Alert.scss'

class Alert extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: true }
    this.onDismiss = this.onDismiss.bind(this)
  }

  onDismiss() {
    this.setState({ isOpen: false })
    setTimeout(() => this.props.clearAlert(), 150)
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.alert.enabled) {
      this.setState({ isOpen: true })
      setTimeout(() => this.onDismiss(), 5000)
    }
  }

  render() {
    if (this.props.alert.enabled) {
      return (
        <AlertComponent
          color={this.props.alert.type}
          isOpen={this.state.isOpen}
          toggle={this.onDismiss}
          styleName="container">
          <ul>
            {this.props.alert.messages.map((message, key) => {
              return <li key={key}>{message}</li>
            })}
          </ul>
        </AlertComponent>
      )
    }

    return null
  }
}

Alert.propTypes = {
  alert: PropTypes.shape({
    type: PropTypes.oneOf(['success', 'danger']),
    messages: PropTypes.arrayOf(PropTypes.string),
    enabled: PropTypes.bool.isRequired
  }).isRequired,
  clearAlert: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    alert: state.alert
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(alertActions, dispatch)
}

Alert = CSSModules(Alert, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Alert)
