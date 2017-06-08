import React, { Component } from 'react'
import { Button, Form, FormGroup, Label, ModalBody, ModalFooter, Nav as NavContainer, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import { Field, reduxForm } from 'redux-form'
import Icon from 'react-fontawesome'
import classNames from 'classnames'

class EditTeam extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 'general' }
    this.toggle = this.toggle.bind(this)
    this.props.change('name', props.team.name)
  }

  toggle(tab) {
    if (this.state.activeTab != tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    const { handleSubmit, toggleModal } = this.props
    return (
      <Form onSubmit={handleSubmit}>
        <ModalBody>
          <NavContainer tabs className="mb-3">
            <NavItem>
              <NavLink
                className={classNames({ active: this.state.activeTab == 'general' })}
                onClick={() => { this.toggle('general') }}>
                General
              </NavLink>
            </NavItem>
            <NavItem>
              <NavLink
                className={classNames({ active: this.state.activeTab == 'webhook' })}
                onClick={() => { this.toggle('webhook') }}>
                WebHook
              </NavLink>
            </NavItem>
          </NavContainer>
          <TabContent activeTab={this.state.activeTab}>
            <TabPane tabId="general">
              <FormGroup>
                <Label>Name</Label>
                <Field component="input" type="text" name="name" className="form-control" />
              </FormGroup>
            </TabPane>
            <TabPane tabId="webhook">
              WebHook
            </TabPane>
          </TabContent>
        </ModalBody>
        <ModalFooter>
          <Button color="secondary" onClick={toggleModal}>Cancel</Button>
          <Button type="submit" color="success"><Icon name="check" /> Save</Button>
        </ModalFooter>
      </Form>
    )
  }
}

EditTeam = reduxForm({ form: 'team' })(EditTeam)

export default EditTeam
