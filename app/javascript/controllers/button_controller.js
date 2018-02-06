import { Controller } from 'stimulus'

export default class extends Controller {
  connect() {
    this.render()
  }

  click(e) {
    this.isPressed = !this.isPressed
    this.render()
  }

  render() {
    if (this.isPressed) {
      this.press.style.display = 'none'
      this.unpress.style.display = 'inline'
    } else {
      this.press.style.display = 'inline'
      this.unpress.style.display = 'none'
    }
  }

  get isPressed() {
    return this.data.get('is-pressed') == 'true'
  }

  get press() {
    return this.targets.find('press')
  }

  get unpress() {
    return this.targets.find('unpress')
  }

  set isPressed(isPressed) {
    this.data.set('is-pressed', isPressed)
  }
}
