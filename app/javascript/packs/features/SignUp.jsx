import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as currentUserActions from '../actions/currentUserActions'
import SignForm from '../components/SignForm'

class SignUp extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    this.props.signUp(values.email, values.password)
  }

  render() {
    return (
      <SignForm
        title="Sign Up"
        onSubmit={this.handleSubmit}
        linkUrl="/sign_in"
        linkText="Sign in as existing user" />
    )
  }
}

SignUp.propTypes = {
  signUp: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentUserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
