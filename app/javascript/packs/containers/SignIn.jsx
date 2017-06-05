import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as currentUserActions from '../actions/currentUserActions'
import Entrance from '../components/Entrance'

class SignIn extends Component {
  onSubmit(values) {
    const { email, password } = values
    this.props.fetchCurrentUser(email, password)
  }

  render() {
    return (
      <Entrance
        title="Sign In"
        onSubmit={this.onSubmit.bind(this)}
        linkUrl="/sign_up"
        linkText="Create your account" />
    )
  }
}

SignIn.propTypes = {
  fetchCurrentUser: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentUserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
