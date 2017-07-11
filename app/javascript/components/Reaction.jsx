import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import Icon from 'react-fontawesome'
import { Popover, PopoverContent } from 'reactstrap'
import EmojiPicker from 'emojione-picker'
import styles from '../styles/Reaction.scss'

class Reaction extends Component {
  constructor(props) {
    super(props)
    this.state = { isOpen: false }
    this.toggle = this.toggle.bind(this)
  }

  toggle() {
    this.setState({ isOpen: !this.state.isOpen })
  }

  render() {
    return (
      <div styleName="container">
        <Icon
          name="smile-o"
          onClick={this.toggle}
          id="reaction"
          styleName={classNames('icon', { active: this.props.post.isReacted })} />
        <Popover
          placement="bottom"
          target="reaction"
          isOpen={this.state.isOpen}
          toggle={this.toggle}
          cssModule={styles}>
          <PopoverContent>
            <EmojiPicker search={true} onChange={this.props.handleChange} />
          </PopoverContent>
        </Popover>
      </div>
    )
  }
}

Reaction.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default CSSModules(Reaction, styles, { allowMultiple: true })
