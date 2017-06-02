import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
  signedInMenu() {
    const { currentUser } = this.props
    return (
      <span>
        <Link to="/account">Account</Link>
        <Link to="/sign_out">Sign out</Link>
        <span>{currentUser.email}</span>
      </span>
    )
  }

  notSignedInMenu() {
    return (
      <span>
        <Link to="/sign_up">Sign up</Link>
        <Link to="/sign_in">Sign in</Link>
      </span>
    )
  }

  render() {
    const { currentUser } = this.props
    return (
      <div>
        <Link to="/">Home</Link>
        {currentUser.signedIn ? this.signedInMenu() : this.notSignedInMenu()}
      </div>
    )
  }
}

Header.propTypes = {
  currentUser: PropTypes.object.isRequired
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return {}
}

export default connect(mapStateToProps, mapDispatchToProps)(Header)
