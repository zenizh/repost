import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'

class Header extends Component {
  render() {
    const { currentUser } = this.props

    if (!currentUser.signedIn) {
      return null
    }

    return (
      <div>
        <Link to="/">Home</Link>
        <Link to="/account">Account</Link>
        <Link to="/sign_out">Sign out</Link>
        <span>{currentUser.email}</span>
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
