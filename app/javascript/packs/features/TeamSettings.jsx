import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as teamActions from '../actions/teamActions'
import Nav from '../containers/Nav'
import SettingsNav from '../components/SettingsNav'
import GeneralSettings from '../components/GeneralSettings'
import styles from '../styles/TeamSettings.scss'

class TeamSettings extends Component {
  constructor(props) {
    super(props)
    this.onSubmit = this.onSubmit.bind(this)
  }

  onSubmit(values) {
    this.props.setTeam(values)
  }

  render() {
    return (
      <div styleName="container">
        <Nav />
        <SettingsNav />
        <GeneralSettings initialValues={this.props.team} onSubmit={this.onSubmit} />
      </div>
    )
  }
}

TeamSettings.propTypes = {
  team: PropTypes.object.isRequired,
  setTeam: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    team: state.team
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(teamActions, dispatch)
}

TeamSettings = CSSModules(TeamSettings, styles)

export default connect(mapStateToProps, mapDispatchToProps)(TeamSettings)
