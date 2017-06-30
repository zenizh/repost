import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Popover, PopoverTitle, PopoverContent, UncontrolledTooltip } from 'reactstrap'
import CSSModules from 'react-css-modules'
import Icon from 'react-fontawesome'
import * as channelActions from '../actions/channelActions'
import ChannelForm from '../components/ChannelForm'
import styles from '../styles/ChannelListHeader.scss'

class ChannelListHeader extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleSubmit(values) {
    this.props.createChannel(values)
  }

  render() {
    const creatable = this.props.currentUser.role == 'admin'
    return (
      <div styleName="container">
        <h3>
          Channels
          {creatable ? (
            <Icon name="plus" id="create_channel" onClick={this.toggle} />
          ) : null}
        </h3>
        {creatable ? (
          <UncontrolledTooltip placement="bottom" target="create_channel">
            Create a channel
          </UncontrolledTooltip>
        ) : null}
        {creatable ? (
          <Popover target="create_channel" placement="bottom" isOpen={this.state.isOpen} toggle={this.toggle}>
            <PopoverTitle>Create a channel</PopoverTitle>
            <PopoverContent>
              <ChannelForm label="Create" onSubmit={this.handleSubmit} />
            </PopoverContent>
          </Popover>
        ) : null}
      </div>
    )
  }
}

ChannelListHeader.propTypes = {
  currentUser: PropTypes.shape({
    role: PropTypes.oneOf(['member', 'admin']).isRequired
  }).isRequired,
  createChannel: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(channelActions, dispatch)
}

ChannelListHeader = CSSModules(ChannelListHeader, styles)

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListHeader)
