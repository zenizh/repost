import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Field, reduxForm } from 'redux-form'
import { Button, Card, CardText, CardBlock, CardFooter, CardTitle, Col, Container, Form, FormGroup, Input, Label, Row } from 'reactstrap'
import { Link } from 'react-router-dom'
import CSSModules from 'react-css-modules'
import styles from '../styles/Entrance.scss'

class Entrance extends Component {
  render() {
    const { title, handleSubmit, linkUrl, linkText } = this.props
    return (
      <Container>
        <Row className="justify-content-center mt-5">
          <Col styleName='col'>
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
              <CardFooter className="small text-muted text-right">
                or <Link to={linkUrl}>{linkText}</Link>
              </CardFooter>
            </Card>
          </Col>
        </Row>
      </Container>
    )
  }
}

Entrance.propTypes = {
  title: PropTypes.string.isRequired,
  linkUrl: PropTypes.string.isRequired,
  linkText: PropTypes.string.isRequired,
  handleSubmit: PropTypes.func.isRequired
}

Entrance = CSSModules(Entrance, styles)
Entrance = reduxForm({ form: 'entrance' })(Entrance)

export default Entrance
