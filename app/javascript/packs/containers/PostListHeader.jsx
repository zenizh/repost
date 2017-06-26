import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import { Popover, PopoverTitle, PopoverContent } from 'reactstrap'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import * as channelActions from '../actions/channelActions'
import ChannelForm from '../components/ChannelForm'
import styles from '../styles/PostListHeader.scss'
import endpoints from '../config/endpoints'

class PostListHeader extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleClick = this.handleClick.bind(this)
    this.handleSubmit = this.handleSubmit.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    if (this.props.channel.name == 'All') {
      return
    }
    this.setState({ isOpen: !this.state.isOpen })
  }

  handleClick() {
    if (window.confirm('Are you sure?')) {
      this.props.deleteChannel(endpoints.channel(this.props.channel.id))
    }
  }

  handleSubmit(values) {
    this.props.updateChannel(endpoints.channel(this.props.channel.id), values)
  }

  render() {
    const { channel, users } = this.props
    return (
      <div styleName="container">
        <span id="edit_channel" onClick={this.toggle}>#{channel.name}</span>
        <Popover target="edit_channel" placement="bottom" isOpen={this.state.isOpen} toggle={this.toggle}>
          <PopoverTitle>Edit channel</PopoverTitle>
          <PopoverContent>
            <ChannelForm
              label="Edit"
              initialValues={channel}
              onSubmit={this.handleSubmit} />
            <div styleName="delete">
              or <a href="#" onClick={this.handleClick}>Delete this channel</a>
            </div>
          </PopoverContent>
        </Popover>
        <div styleName="right">
          <Icon name="user" /> {(users.length > 0) ? users.length : null}
        </div>
      </div>
    )
  }
}

PostListHeader.propTypes = {
  channel: PropTypes.shape({
    name: PropTypes.string
  }).isRequired,
  users: PropTypes.array.isRequired,
  deleteChannel: PropTypes.func.isRequired,
  updateChannel: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    channel: state.channel,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(channelActions, dispatch)
}

PostListHeader = CSSModules(PostListHeader, styles)

export default connect(mapStateToProps, mapDispatchToProps)(PostListHeader)
