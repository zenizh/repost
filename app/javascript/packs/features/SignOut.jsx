import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as currentUserActions from '../actions/currentUserActions'

class SignOut extends Component {
  componentWillMount() {
    this.props.signOut()
  }

  render() {
    return null
  }
}

SignOut.propTypes = {
  signOut: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentUserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignOut)
