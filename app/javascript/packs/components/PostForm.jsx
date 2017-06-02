import React, { Component } from 'react'
import PropTypes from 'prop-types'

class PostForm extends Component {
  handleSubmit(e) {
    e.preventDefault()
    this.props.registerPost(
      this.props.currentUser,
      e.target.content.value
    )
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit.bind(this)}>
          <textarea name="content"></textarea>
          <input type="submit" />
        </form>
      </div>
    )
  }
}

PostForm.propTypes = {
  currentUser: PropTypes.object.isRequired,
  registerPost: PropTypes.func.isRequired
}

export default PostForm
