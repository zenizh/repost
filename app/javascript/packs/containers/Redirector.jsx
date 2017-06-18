import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import * as redirectActions from '../actions/redirectActions'

class Redirector extends Component {
  componentWillReceiveProps(nextProps) {
    if (nextProps.redirect.enabled) {
      this.props.redirectTo(nextProps.redirect.url)
    }
  }

  render() {
    return null
  }
}

Redirector.propTypes = {
  redirect: PropTypes.object.isRequired,
  redirectTo: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    redirect: state.redirect
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(redirectActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(Redirector)
