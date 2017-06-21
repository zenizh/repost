import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap'
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
    return (
      <div styleName="container">
        <h3>
          Channels
          <Icon name="plus" id="popover" onClick={this.toggle} />
        </h3>
        <Popover target="popover" placement="bottom" isOpen={this.state.isOpen} toggle={this.toggle}>
          <PopoverTitle>Create a channel</PopoverTitle>
          <PopoverContent>
            <ChannelForm onSubmit={this.handleSubmit} />
          </PopoverContent>
        </Popover>
      </div>
    )
  }
}

ChannelListHeader.propTypes = {
  createChannel: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(channelActions, dispatch)
}

ChannelListHeader = CSSModules(ChannelListHeader, styles)

export default connect(mapStateToProps, mapDispatchToProps)(ChannelListHeader)
