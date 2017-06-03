import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, CardText, CardBlock, Form, FormGroup, Label, Input } from 'reactstrap'

class UserForm extends Component {
  render() {
    return (
      <Form onSubmit={this.props.handleSubmit}>
        <FormGroup>
          <Label>Email</Label>
          <Field component="input" type="email" name="email" className="form-control" />
        </FormGroup>
        <FormGroup>
          <Label>Password</Label>
          <Field component="input" type="password" name="password" className="form-control" />
        </FormGroup>
        <Button type="submit" color="success" className="btn-block">Submit</Button>
      </Form>
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
