import React from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Card, CardText, CardBlock, CardFooter, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import styles from '../styles/SignForm.scss'

let SignForm = (props) => {
  const { linkText, linkUrl, title,  handleSubmit } = props
  return (
    <Container styleName="container">
      <Row styleName="row">
        <Col styleName="col">
          <Card>
            <CardBlock>
              <CardTitle>{title}</CardTitle>
              <Form onSubmit={handleSubmit}>
                <FormGroup>
                  <Label>Email</Label>
                  <Field component="input" type="email" name="email" className="form-control" />
                </FormGroup>
                <FormGroup>
                  <Label>Password</Label>
                  <Field component="input" type="password" name="password" className="form-control" />
                </FormGroup>
                <Button type="submit" color="success" className="btn-block">Submit</Button>
              </Form>
            </CardBlock>
            <CardFooter styleName="footer">
              or <Link to={linkUrl}>{linkText}</Link>
            </CardFooter>
          </Card>
        </Col>
      </Row>
    </Container>
  )
}

SignForm.propTypes = {
  linkText: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

SignForm = CSSModules(SignForm, styles)
SignForm = reduxForm({ form: 'SignForm' })(SignForm)

export default SignForm
