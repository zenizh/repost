import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as currentUserActions from '../actions/currentUserActions'
import Entrance from '../components/Entrance'

class SignIn extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(values) {
    this.props.fetchCurrentUser(values.email, values.password)
  }

  render() {
    return (
      <Entrance
        title="Sign In"
        onSubmit={this.onSubmit}
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
