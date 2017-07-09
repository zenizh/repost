import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import { Button } from 'reactstrap'
import styles from '../styles/ChannelUsersForm.scss'

const ChannelUsersForm = (props) => {
  const { channelUsers, users, handleJoin, handleLeave } = props
  return (
    <div>
      {users.map((user, key) => {
        const isJoined = channelUsers.find((channelUser) => channelUser.id == user.id)
        return (
          <div key={key} styleName="row">
            <div styleName="user">
              <img src={user.avatar} />
              {user.name}
            </div>
            {isJoined ? (
              <Button color="danger" onClick={() => handleLeave(user)} styleName="button">Leave</Button>
            ) : (
              <Button color="success" onClick={() => handleJoin(user)} styleName="button">Join</Button>
            )}
          </div>
        )
      })}
    </div>
  )
}

ChannelUsersForm.propTypes = {
  channelUsers: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired
  }).isRequired).isRequired,
  users: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    avatar: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired
  }).isRequired),
  handleJoin: PropTypes.func.isRequired,
  handleLeave: PropTypes.func.isRequired
}

export default CSSModules(ChannelUsersForm, styles)
