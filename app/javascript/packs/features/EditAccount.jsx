import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as currentUserActions from '../actions/currentUserActions'
import Nav from '../containers/Nav'
import SettingsNav from '../components/SettingsNav'
import AccountForm from '../components/AccountForm'
import styles from '../styles/EditAccount.scss'

class EditAccount extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(values) {
    this.props.updateCurrentUser(values)
  }

  render() {
    return (
      <div styleName="container">
        <Nav />
        <SettingsNav />
        <AccountForm initialValues={this.props.currentUser} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

EditAccount.propTypes = {
  currentUser: PropTypes.object.isRequired,
  updateCurrentUser: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentUserActions, dispatch)
}

EditAccount = CSSModules(EditAccount, styles)

export default connect(mapStateToProps, mapDispatchToProps)(EditAccount)
