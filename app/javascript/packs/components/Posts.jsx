import React, { Component } from 'react'
import PropTypes from 'prop-types'

class Posts extends Component {
  post(post, key) {
    return (
      <div key={key}>
        <span>{post.user.name}(@{post.user.screenName})</span>
        <p>{post.content}</p>
        <span>{post.createdAt}</span>
      </div>
    )
  }

  render() {
    return (
      <div>
        <h3>Posts</h3>
        {this.props.posts.map((post, key) => {
          return this.post(post, key)
        })}
      </div>
    )
  }
}

Posts.propTypes = {
  posts: PropTypes.array.isRequired
}

export default Posts
