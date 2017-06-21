import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, FormGroup, InputGroup, InputGroupAddon, Label } from 'reactstrap'
import CSSModules from 'react-css-modules'
import Icon from 'react-fontawesome'
import styles from '../styles/ChannelForm.scss'

let ChannelForm = (props) => {
  return (
    <Form onSubmit={props.handleSubmit} className="clearfix" styleName="container">
      <FormGroup>
        <Label>Name</Label>
        <InputGroup>
          <InputGroupAddon>#</InputGroupAddon>
          <Field component="input" type="text" name="name" className="form-control" />
        </InputGroup>
      </FormGroup>
      <Button type="submit" color="success"><Icon name="check" /> Create</Button>
    </Form>
  )
}

ChannelForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

ChannelForm = CSSModules(ChannelForm, styles)
ChannelForm = reduxForm({ form: 'channel' })(ChannelForm)

export default ChannelForm
