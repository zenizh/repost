import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import Icon from 'react-fontawesome'
import { Popover, PopoverTitle, PopoverContent, UncontrolledTooltip } from 'reactstrap'
import styles from '../styles/PostListUsers.scss'

class PostListUsers extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { channel, channelUsers, currentUser } = this.props
    const editable = channel.editable && (currentUser.role == 'admin')

    if (channelUsers.length == 0) {
      return null
    }

    return (
      <div styleName="container">
        <span id="edit_channel_users" onClick={this.toggle} styleName={classNames('users', { editable: editable })}><Icon name="user" /> {channelUsers.length}</span>
        {editable ? (
          <UncontrolledTooltip target="edit_channel_users" placement="bottom">
            Edit channel users
          </UncontrolledTooltip>
        ) : null}
        {editable ? (
          <Popover target="edit_channel_users" placement="bottom" isOpen={this.state.isOpen} toggle={this.toggle}>
            <PopoverTitle>Edit channel users</PopoverTitle>
            <PopoverContent>
            </PopoverContent>
          </Popover>
        ) : null}
      </div>
    )
  }
}

PostListUsers.propTypes = {
  channel: PropTypes.shape({
    editable: PropTypes.bool.isRequired
  }).isRequired,
  channelUsers: PropTypes.array.isRequired,
  currentUser: PropTypes.shape({
    role: PropTypes.oneOf(['member', 'admin']).isRequired
  }).isRequired
}

function mapStateToProps(state) {
  return {
    channel: state.channel,
    channelUsers: state.channelUsers,
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

PostListUsers = CSSModules(PostListUsers, styles, { allowMultiple: true })

export default connect(mapStateToProps, mapDispatchToProps)(PostListUsers)
