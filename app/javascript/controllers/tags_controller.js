import { Controller } from 'stimulus'

export default class extends Controller {
  keypress(e) {
    if (e.key == 'Enter') {
      if (this.input.value == '') {
        return e.preventDefault()
      }

      if (this.isExists) {
        this.clear()
        return e.preventDefault()
      }

      this.add(this.input.value)
      this.clear()

      e.preventDefault()
    }
  }

  add(name) {
    const tag = document.importNode(this.template, true)
    const input = tag.content.querySelector('input')
    input.value = name
    this.list.appendChild(tag.content)
  }

  remove(e) {
    this.list.removeChild(e.target.parentNode)
  }

  clear() {
    this.input.value = ''
  }

  get template() {
    return this.element.querySelector('template')
  }

  get list() {
    return this.targets.find('list')
  }

  get input() {
    return this.targets.find('input')
  }

  get isExists() {
    for (let input of this.list.querySelectorAll('input')) {
      if (input.value == this.input.value) {
        return true
      }
    }
  }
}
