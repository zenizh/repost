import { Controller } from 'stimulus'

export default class extends Controller {
  connect() {
    this.default.forEach(name => this.add(name))
  }

  keypress(e) {
    if (e.key == 'Enter') {
      if (this.input.value == '') {
        return e.preventDefault()
      }

      if (this.isExists()) {
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

  isExists() {
    for (let input of this.list.querySelectorAll('input')) {
      if (input.value == this.input.value) {
        return true
      }
    }
    return false
  }

  get template() {
    return this.element.querySelector('template')
  }

  get default() {
    return JSON.parse(this.data.get('default'))
  }

  get list() {
    return this.targets.find('list')
  }

  get input() {
    return this.targets.find('input')
  }
}
