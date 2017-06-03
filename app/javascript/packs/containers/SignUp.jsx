import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
import { bindActionCreators } from 'redux'
import { Field, reduxForm } from 'redux-form'
import { Link } from 'react-router-dom'
import { Card, CardBlock, CardFooter, CardTitle, Col, Container, Row } from 'reactstrap'
import CSSModules from 'react-css-modules'
import * as currentUserActions from '../actions/currentUserActions'
import UserForm from '../components/UserForm'
import styles from '../styles/UserForm.scss'

class SignUp extends Component {
  onSubmit(values) {
    const { email, password } = values
    this.props.createUser(email, password)
  }

  render() {
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          <Col styleName='col'>
            <Card>
              <CardBlock>
                <CardTitle>Sign Up</CardTitle>
                <UserForm onSubmit={this.onSubmit.bind(this)} />
              </CardBlock>
              <CardFooter className="small text-muted text-right">
                or <Link to="/sign_in">Sign in as existing user</Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

SignUp.propTypes = {
  createUser: PropTypes.func.isRequired
}

SignUp = CSSModules(SignUp, styles)

function mapStateToProps(state) {
  return {}
}

function mapDispatchToProps(dispatch) {
  return bindActionCreators(currentUserActions, dispatch)
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUp)
