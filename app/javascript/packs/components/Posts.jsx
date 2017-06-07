import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Card, CardBlock } from 'reactstrap';
import CSSModules from 'react-css-modules'
import styles from '../styles/Posts.scss'

class Posts extends Component {
  componentWillReceiveProps(nextProps) {
    if (!this.props.post.content) {
      this.props.setPost(nextProps.posts[0])
    }
  }

  handleClick(post) {
    this.props.setPost(post)
  }

  styleName(post) {
    let name = 'card'
    name += (post.selected) ? ' selected' : ''
    name += (post.starred) ? ' starred' : ''
    return name
  }

  post(post, key) {
    const styleName = this.styleName(post)
    return (
      <Card key={key} onClick={() => this.handleClick(post)} className="mb-2" styleName={styleName}>
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
  post: PropTypes.object.isRequired,
  posts: PropTypes.array.isRequired,
  setPost: PropTypes.func.isRequired
}

Posts = CSSModules(Posts, styles, { allowMultiple: true })

export default Posts
