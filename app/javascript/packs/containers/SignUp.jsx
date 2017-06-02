import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as currentUserActions from '../actions/currentUserActions'
import UserForm from '../components/UserForm'

class SignUp extends Component {
  onSubmit(values) {
    const { email, password } = values
    this.props.createUser(email, password)
  }

  render() {
    return (
      <div>
        <h2>SignUp</h2>
        <UserForm onSubmit={this.onSubmit.bind(this)} />
      </div>
    )
  }
}

SignUp.propTypes = {
  createUser: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentUserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
