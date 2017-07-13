import React, { Component } from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import CSSModules from 'react-css-modules'
import Icon from 'react-fontawesome'
import { Button, Popover, PopoverContent } from 'reactstrap'
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
      <span styleName="container">
        <Button
          color="outline-secondary"
          size="sm"
          onClick={this.toggle}
          id="reaction"
          styleName="button">
          <Icon name="smile-o" styleName="icon" />
          <Icon name="plus" />
        </Button>
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
      </span>
    )
  }
}

Reaction.propTypes = {
  handleChange: PropTypes.func.isRequired
}

export default CSSModules(Reaction, styles)
