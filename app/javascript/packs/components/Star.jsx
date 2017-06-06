import React, { Component } from 'react'
import PropTypes from 'prop-types'
import Icon from 'react-fontawesome'
import endpoints from '../config/endpoints'

class Star extends Component {
  constructor(props) {
    super(props)
    this.set = this.set.bind(this)
    this.unset = this.unset.bind(this)
  }

  set() {
    this.props.setStar(endpoints.postStars(this.props.post.id))
  }

  unset() {
    this.props.unsetStar(endpoints.postStars(this.props.post.id))
  }

  render() {
    let star = null

    if (this.props.post.starred) {
      star = <Icon name="star" onClick={this.unset} />
    } else {
      star = <Icon name="star-o" onClick={this.set} />
    }

    return star
  }
}

Star.propTypes = {
  post: PropTypes.object.isRequired,
  setStar: PropTypes.func.isRequired,
  unsetStar: PropTypes.func.isRequired
}

export default Star
