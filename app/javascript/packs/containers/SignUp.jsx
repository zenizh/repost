import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as currentUserActions from '../actions/currentUserActions'

class SignUp extends Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.requestSignUp(
      e.target.email.value,
      e.target.password.value
    )
  }

  render() {
    return (
      <div>
        <h2>SignUp</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="email" />
          <input type="password" name="password" />
          <input type="submit" />
        </form>
      </div>
    )
  }
}

SignUp.propTypes = {
  requestSignUp: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentUserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
