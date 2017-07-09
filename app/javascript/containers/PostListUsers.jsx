import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import Icon from 'react-fontawesome'
import { Popover, PopoverTitle, PopoverContent, UncontrolledTooltip } from 'reactstrap'
import * as subscriptionsActions from '../actions/subscriptionsActions'
import * as usersActions from '../actions/usersActions'
import ChannelUsersForm from '../components/ChannelUsersForm'
import styles from '../styles/PostListUsers.scss'

class PostListUsers extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.handleJoin = this.handleJoin.bind(this)
    this.handleLeave = this.handleLeave.bind(this)
    this.toggle = this.toggle.bind(this)
  }

  componentDidMount() {
    this.props.fetchUsers()
  }

  handleJoin(user) {
    this.props.createSubscription(user.id, this.props.channel.id)
  }

  handleLeave(user) {
    this.props.deleteSubscription(user.id, this.props.channel.id)
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    const { channel, channelUsers, currentUser, users } = this.props
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
            <PopoverContent styleName="content">
              <ChannelUsersForm
                channelUsers={channelUsers}
                users={users}
                handleJoin={this.handleJoin}
                handleLeave={this.handleLeave} />
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
  }).isRequired,
  createSubscription: PropTypes.func.isRequired,
  deleteSubscription: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    channel: state.channel,
    channelUsers: state.channelUsers,
    currentUser: state.currentUser,
    users: state.users
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators({ ...subscriptionsActions, ...usersActions }, dispatch)
}

PostListUsers = CSSModules(PostListUsers, styles, { allowMultiple: true })

export default connect(mapStateToProps, mapDispatchToProps)(PostListUsers)
