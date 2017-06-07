import React, { Component } from 'react'
import { Nav as NavContainer, NavItem, NavLink, TabContent, TabPane } from 'reactstrap'
import classNames from 'classnames'

class EditTeam extends Component {
  constructor(props) {
    super(props)
    this.state = { activeTab: 'general' }
    this.toggle = this.toggle.bind(this)
  }

  toggle(tab) {
    if (this.state.activeTab != tab) {
      this.setState({ activeTab: tab })
    }
  }

  render() {
    return (
      <div>
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
            General
          </TabPane>
          <TabPane tabId="webhook">
            WebHook
          </TabPane>
        </TabContent>
      </div>
    )
  }
}

export default EditTeam
