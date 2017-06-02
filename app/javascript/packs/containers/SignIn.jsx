import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import * as currentUserActions from '../actions/currentUserActions'
import UserForm from '../components/UserForm'

class SignIn extends Component {
  onSubmit(values) {
    const { email, password } = values
    this.props.fetchCurrentUser(email, password)
  }

  render() {
    return (
      <div>
        <h2>SignIn</h2>
        <UserForm onSubmit={this.onSubmit.bind(this)} />
      </div>
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
