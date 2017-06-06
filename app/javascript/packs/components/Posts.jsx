import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardBlock } from 'reactstrap';
import CSSModules from 'react-css-modules'
import styles from '../styles/Posts.scss'

class Posts extends Component {
  post(post, key) {
    return (
      <Card key={key} className="mb-2" styleName="card">
        <CardBlock>
          <span>{post.user.name}(@{post.user.screenName})</span>
          <p>{post.content}</p>
          <span>{post.createdAt}</span>
        </CardBlock>
      </Card>
    )
  }

  render() {
    return (
      <div className="pt-2 px-3" styleName="container">
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

Posts = CSSModules(Posts, styles)

export default Posts
