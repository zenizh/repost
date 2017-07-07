import React from 'react'
import PropTypes from 'prop-types'
import { UncontrolledTooltip } from 'reactstrap'
import CSSModules from 'react-css-modules'
import styles from '../styles/UserList.scss'

const UserList = (props) => {
  if (props.channelUsers.length == 0) {
    return null
  }

  return (
    <div styleName="container">
      <h3>Users</h3>
      <ul>
        {props.channelUsers.map((user, key) => {
          const id = `user_${user.id}`
          return (
            <li key={key} id={id}>
              <img src={user.avatar} />
              <UncontrolledTooltip placement="bottom" target={id} delay={{ hide: 0 }}>
                {user.name}
              </UncontrolledTooltip>
            </li>
          )
        })}
      </ul>
    </div>
  )
}

UserList.propTypes = {
  channelUsers: PropTypes.arrayOf(PropTypes.shape({
    avatar: PropTypes.string.isRequired
  }).isRequired).isRequired
}

export default CSSModules(UserList, styles)
