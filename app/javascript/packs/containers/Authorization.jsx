import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'

class AuthorizationComponent extends Component {
  default() {
    return false
  }

  authorize() {
    const type = this.props.type || 'default'
    return this[type](this.props.currentUser, this.props)
  }
}

class AbilityComponent extends AuthorizationComponent {
  author(currentUser, props) {
    return currentUser.id == props.post.user.id
  }

  owner(currentUser, props) {
    return currentUser.role == 'owner'
  }
}

class Authorization extends AbilityComponent {
  render() {
    if (this.authorize()) {
      return this.props.children
    }
    return null
  }
}

class Unauthorization extends AbilityComponent {
  render() {
    if (!this.authorize()) {
      return this.props.children
    }
    return null
  }
}

const propTypes = {
  currentUser: PropTypes.object.isRequired,
  post: PropTypes.object
}

Authorization.propTypes = propTypes
Unauthorization.propTypes = propTypes

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

Authorization = connect(mapStateToProps, mapDispatchToProps)(Authorization)
Unauthorization = connect(mapStateToProps, mapDispatchToProps)(Unauthorization)

export { Authorization, Unauthorization }
