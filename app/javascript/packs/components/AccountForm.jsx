import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, FormGroup, InputGroup, InputGroupAddon, Label } from 'reactstrap'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/AccountForm.scss'

let AccountForm = (props) => {
  return (
    <div styleName="container">
      <div>
        <h2>Profile</h2>
        <Form onSubmit={props.handleSubmit}>
          <FormGroup>
            <Label>Email</Label>
            <Field component="input" type="email" name="email" className="form-control" />
          </FormGroup>
          <FormGroup>
            <Label>Screen Name</Label>
            <InputGroup>
              <InputGroupAddon>@</InputGroupAddon>
              <Field component="input" type="text" name="screenName" className="form-control" />
            </InputGroup>
          </FormGroup>
          <FormGroup>
            <Label>Name</Label>
            <Field component="input" type="text" name="name" className="form-control" />
          </FormGroup>
          <Button type="submit" color="success"><Icon name="check" /> Save</Button>
        </Form>
      </div>
    </div>
  )
}

AccountForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

AccountForm = CSSModules(AccountForm, styles)
AccountForm = reduxForm({ form: 'account_form', enableReinitialize: true })(AccountForm)

export default AccountForm
