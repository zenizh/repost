import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Col, Form, FormGroup, Label } from 'reactstrap'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/TeamForm.scss'

let TeamForm = (props) => {
  return (
    <div styleName="container">
      <div>
        <h2>General Settings</h2>
        <Form onSubmit={props.handleSubmit}>
          <FormGroup row>
            <Label sm={3}>Name</Label>
            <Col sm={9}>
              <Field component="input" type="text" name="name" className="form-control" />
            </Col>
          </FormGroup>
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

TeamForm.propTypes = {
  handleSubmit: PropTypes.func.isRequired
}

TeamForm = CSSModules(TeamForm, styles)
TeamForm = reduxForm({ form: 'team_settings', enableReinitialize: true })(TeamForm)

export default TeamForm
