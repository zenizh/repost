import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import { Table } from 'reactstrap'
import Icon from 'react-fontawesome'
import CSSModules from 'react-css-modules'
import styles from '../styles/ServiceList.scss'

const service = (service, key) => {
  return (
    <tr key={key}>
      <td><Icon name={service.iconName} /> {service.name}</td>
      <td>#{service.channel}</td>
      <td>{service.onPost ? <Icon name="check" /> : '-'}</td>
      <td>{service.onComment ? <Icon name="check" /> : '-'}</td>
      <td><Link to="#">Edit</Link></td>
    </tr>
  )
}

const ServiceList = (props) => {
  return (
    <div styleName="container">
      <div>
        <h2>WebHooks</h2>
        <Table bordered>
          <thead>
            <tr>
              <th>Service</th>
              <th>Channel</th>
              <th>Post</th>
              <th>Comment</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {props.services.map(service)}
          </tbody>
        </Table>
      </div>
    </div>
  )
}

ServiceList.propTypes = {
  services: PropTypes.array.isRequired
}

export default CSSModules(ServiceList, styles)
