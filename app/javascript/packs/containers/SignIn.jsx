import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import * as currentUserActions from '../actions/currentUserActions'

class SignIn extends Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.fetchCurrentUser(
      e.target.email.value,
      e.target.password.value
    )
  }

  render() {
    return (
      <div>
        <h2>SignIn</h2>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <input type="text" name="email" />
          <input type="password" name="password" />
          <input type="submit" />
        </form>
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
