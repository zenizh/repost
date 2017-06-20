import React from 'react'
import PropTypes from 'prop-types'
import CSSModules from 'react-css-modules'
import styles from '../styles/UserList.scss'

const UserList = (props) => {
  if (props.users.length == 0) {
    return null
  }

  return (
    <div styleName="container">
      <h3>Users</h3>
      <ul>
        {props.users.map((user, key) => {
          return <li key={key}><img src={user.avatar} /></li>
        })}
      </ul>
    </div>
  )
}

UserList.propTypes = {
  users: PropTypes.array.isRequired
}

export default CSSModules(UserList, styles)
