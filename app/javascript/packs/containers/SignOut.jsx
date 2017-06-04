import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as currentUserActions from '../actions/currentUserActions'

class SignOut extends Component {
  componentWillMount() {
    this.props.signOutUser()
  }

  render() {
    return null
  }
}

SignOut.propTypes = {
  signOutUser: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentUserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)
