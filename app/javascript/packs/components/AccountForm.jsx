import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Form, FormGroup, InputGroup, InputGroupAddon, Label } from 'reactstrap'
import DropZone from 'react-dropzone'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/AccountForm.scss'

class AccountForm extends Component {
  componentWillReceiveProps(nextProps) {
    this.props.change('avatar', nextProps.avatar)
  }

  render() {
    const { avatar, handleDrop, handleSubmit } = this.props
    return (
      <div styleName="container">
        <div>
          <h2>Profile</h2>
          <Form onSubmit={handleSubmit}>
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
            <FormGroup>
              <Label>Avatar</Label>
              <DropZone name="avatar" accept="image/*" multiple={false} onDrop={handleDrop} styleName="dropzone">
                {(avatar) ? (
                  <img src={avatar.preview} />
                ) : (
                  <p>Try dropping your avatar here, or click to select file to upload.</p>
                )}
              </DropZone>
            </FormGroup>
            <Button type="submit" color="success"><Icon name="check" /> Save</Button>
          </Form>
        </div>
      </div>
    )
  }
}

AccountForm.propTypes = {
  avatar: PropTypes.object,
  handleSubmit: PropTypes.func.isRequired,
  handleDrop: PropTypes.func.isRequired
}

AccountForm = CSSModules(AccountForm, styles)
AccountForm = reduxForm({ form: 'account_form', enableReinitialize: true })(AccountForm)

export default AccountForm
