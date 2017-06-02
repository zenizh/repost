import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'

class UserForm extends Component {
  render() {
    return (
      <form onSubmit={this.props.handleSubmit}>
        <Field component="input" type="email" name="email" />
        <Field component="input" type="password" name="password" />
        <input type="submit" />
      </form>
    )
  }
}

UserForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

UserForm = reduxForm({
  form: 'user'
})(UserForm)

export default UserForm
