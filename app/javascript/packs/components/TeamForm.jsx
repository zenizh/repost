import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, FormGroup, Label } from 'reactstrap'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/TeamForm.scss'

let TeamForm = (props) => {
  return (
    <div styleName="container">
      <div>
        <h2>General Settings</h2>
        <Form onSubmit={props.handleSubmit}>
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

TeamForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

TeamForm = CSSModules(TeamForm, styles)
TeamForm = reduxForm({ form: 'team_settings', enableReinitialize: true })(TeamForm)

export default TeamForm
