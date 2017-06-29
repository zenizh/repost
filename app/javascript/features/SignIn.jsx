import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as currentUserActions from '../actions/currentUserActions'
import SignForm from '../components/SignForm'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    this.props.signIn(values.email, values.password)
  }

  render() {
    return (
      <SignForm
        title="Sign In"
        onSubmit={this.handleSubmit}
        linkUrl="/sign_up"
        linkText="Create your account" />
    )
  }
}

SignIn.propTypes = {
  signIn: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentUserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignIn)
