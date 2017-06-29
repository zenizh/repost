import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as teamActions from '../actions/teamActions'
import Nav from '../containers/Nav'
import SettingsNav from '../components/SettingsNav'
import TeamForm from '../components/TeamForm'
import styles from '../styles/TeamSettings.scss'

class TeamSettings extends Component {
  constructor(props) {
    super(props)
    this.handleSubmit = this.handleSubmit.bind(this)
  }

  handleSubmit(values) {
    this.props.updateTeam(values)
  }

  render() {
    return (
      <div styleName="container">
        <Nav />
        <SettingsNav />
        <TeamForm initialValues={this.props.team} onSubmit={this.handleSubmit} />
      </div>
    )
  }
}

TeamSettings.propTypes = {
  team: PropTypes.object.isRequired,
  updateTeam: PropTypes.func.isRequired
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
