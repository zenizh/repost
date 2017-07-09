import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import Icon from 'react-fontawesome'
import { Popover, PopoverTitle, PopoverContent, UncontrolledTooltip } from 'reactstrap'
import classNames from 'classnames'
import * as channelActions from '../actions/channelActions'
import ChannelForm from '../components/ChannelForm'
import styles from '../styles/PostListChannel.scss'
import endpoints from '../config/endpoints'

class PostListChannel extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  handleClick() {
    if (window.confirm('Are you sure?')) {
      this.props.deleteChannel(this.props.channel.id)
    }
  }

  handleSubmit(values) {
    this.props.updateChannel(this.props.channel.id, values)
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { channel, currentUser } = this.props
    const editable = channel.editable && (currentUser.role == 'admin')

    if (!channel.name) {
      return null
    }

    return (
      <div styleName="container">
        <span id="edit_channel" onClick={this.toggle} styleName={classNames('channel', { editable: editable })}><Icon name={channel.icon} /> {channel.name}</span>
        {editable ? (
          <UncontrolledTooltip target="edit_channel" placement="bottom">
            Edit channel
          </UncontrolledTooltip>
        ) : null}
        {editable ? (
          <Popover target="edit_channel" placement="bottom" isOpen={this.state.isOpen} toggle={this.toggle}>
            <PopoverTitle>Edit channel</PopoverTitle>
            <PopoverContent>
              <ChannelForm
                label="Edit"
                initialValues={channel}
                onSubmit={this.handleSubmit} />
              <div styleName="delete">
                or <a id="delete_channel" onClick={this.handleClick}>Delete this channel</a>
              </div>
            </PopoverContent>
          </Popover>
        ) : null}
      </div>
    )
  }
}

PostListChannel.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string,
    editable: PropTypes.bool.isRequired,
    icon: PropTypes.string.isRequired
  }).isRequired,
  currentUser: PropTypes.shape({
    role: PropTypes.oneOf(['member', 'admin']).isRequired
  }).isRequired,
  deleteChannel: PropTypes.func.isRequired,
  updateChannel: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    channel: state.channel,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(channelActions, dispatch)
}

PostListChannel = CSSModules(PostListChannel, styles, { allowMultiple: true })

export default connect(mapStateToProps, mapDispatchToProps)(PostListChannel)
