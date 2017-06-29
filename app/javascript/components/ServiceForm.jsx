import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Col, Form, FormGroup, Label, Input } from 'reactstrap'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/ServiceForm.scss'

let ServiceForm = (props) => {
  return (
    <div styleName="container">
      <div>
        <h2>WebHook</h2>
        <Form onSubmit={props.handleSubmit}>
          <FormGroup row disabled>
            <Label sm={3}>Service</Label>
            <Col sm={9}>
              <Field component="input" type="text" name="name" disabled className="form-control" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={3}>WebHook URL</Label>
            <Col sm={9}>
              <Field component="input" type="text" name="webhookUrl" className="form-control" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={3}>Channel</Label>
            <Col sm={9}>
              <Field component="input" type="text" name="channel" className="form-control" />
            </Col>
          </FormGroup>
          <FormGroup row>
            <Label sm={{ size: 9, offset: 3 }} check>
              <Field component="input" type="checkbox" name="onPost" /> On Post
            </Label>
            <Label sm={{ size: 9, offset: 3 }} check>
              <Field component="input" type="checkbox" name="onComment" /> On Comment
            </Label>
          </FormGroup>
          <Field component="input" type="hidden" name="type" />
          <FormGroup row>
            <Col sm={{ size: 9, offset: 3 }}>
              <Button type="submit" color="success"><Icon name="check" /> Save</Button>
            </Col>
          </FormGroup>
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
