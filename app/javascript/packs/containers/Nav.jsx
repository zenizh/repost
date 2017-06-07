import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Button } from 'reactstrap'
import { UncontrolledDropdown, DropdownToggle, DropdownMenu, DropdownItem } from 'reactstrap';
import { Link } from 'react-router-dom'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import * as channelsActions from '../actions/channelsActions'
import Brand from '../components/Brand'
import Channels from '../components/Channels'
import styles from '../styles/Nav.scss'

class Nav extends Component {
  componentWillMount() {
    this.props.fetchChannels()
  }

  render() {
    const { channels, currentUser } = this.props
    return (
      <div className="bg-inverse" styleName="container">
        <Brand />
        <Button type="submit" color="primary" className="d-block mx-3 mb-4">
          <Icon name="pencil" /> New Post
        </Button>
        <div styleName="content">
          <span className="d-inline-block mx-3 mb-2 small text-uppercase" styleName="heading">Channels</span>
          <Channels channels={channels} />
        </div>
        <div className="px-3" styleName="menu">
          <UncontrolledDropdown dropup>
            <DropdownToggle caret color="link" className="btn-block text-white" styleName="toggle">
              {currentUser.name}
            </DropdownToggle>
            <DropdownMenu>
              <DropdownItem header>User Menu</DropdownItem>
              <Link to="/account" className="dropdown-item">Account</Link>
              <DropdownItem divider />
              <Link to="/sign_out" className="dropdown-item">Sign Out</Link>
            </DropdownMenu>
          </UncontrolledDropdown>
        </div>
      </div>
    )
  }
}

Nav.propTypes = {
  channels: PropTypes.array.isRequired,
  currentUser: PropTypes.object.isRequired,
  fetchChannels: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    channels: state.channels,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(channelsActions, dispatch)
}

Nav = CSSModules(Nav, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
