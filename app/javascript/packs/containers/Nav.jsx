import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { bindActionCreators } from 'redux'
import { connect } from 'react-redux'
import CSSModules from 'react-css-modules'
import * as teamActions from '../actions/teamActions'
import NavContent from './NavContent'
import Header from '../components/Header'
import NewPostButton from '../components/NewPostButton'
import Footer from '../components/Footer'
import styles from '../styles/Nav.scss'

class Nav extends Component {
  componentDidMount() {
    this.props.fetchTeam()
  }

  render() {
    const { currentUser, team } = this.props
    return (
      <div styleName="container">
        <Header team={team} />
        <NewPostButton />
        <NavContent />
        <Footer currentUser={currentUser} />
      </div>
    )
  }
}

Nav.propTypes = {
  currentUser: PropTypes.object.isRequired,
  team: PropTypes.object.isRequired,
  fetchTeam: PropTypes.func.isRequired
}

function mapStateToProps(state) {
  return {
    currentUser: state.currentUser,
    team: state.team
  }
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(teamActions, dispatch)
}

Nav = CSSModules(Nav, styles)

export default connect(mapStateToProps, mapDispatchToProps)(Nav)
