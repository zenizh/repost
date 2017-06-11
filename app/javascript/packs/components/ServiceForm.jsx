import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/ServiceForm.scss'

let ServiceForm = (props) => {
  return (
    <div styleName="container">
      <div>
        <h2>WebHook</h2>
        <Form onSubmit={props.handleSubmit}>
          <FormGroup disabled>
            <Label>Service</Label>
            <Field component="input" type="text" name="name" disabled className="form-control" />
          </FormGroup>
          <FormGroup>
            <Label>WebHook URL</Label>
            <Field component="input" type="text" name="webhookUrl" className="form-control" />
          </FormGroup>
          <FormGroup>
            <Label>Channel</Label>
            <Field component="input" type="text" name="channel" className="form-control" />
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Field component="input" type="checkbox" name="onPost" className="form-check-input" /> On Post
            </Label>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Field component="input" type="checkbox" name="onComment" className="form-check-input" /> On Comment
            </Label>
          </FormGroup>
          <Button type="submit" color="success"><Icon name="check" /> Save</Button>
        </Form>
      </div>
    </div>
  )
}

ServiceForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

ServiceForm = CSSModules(ServiceForm, styles)
ServiceForm = reduxForm({ form: 'webhook', enableReinitialize: true })(ServiceForm)

export default ServiceForm
