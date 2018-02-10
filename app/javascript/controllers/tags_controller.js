import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['input', 'names', 'template']

  connect() {
    this.defaultNames.forEach(name => this.add(name))
  }

  keypress(e) {
    if (e.key == 'Enter') {
      if (this.inputTarget.value == '') {
        return e.preventDefault()
      }

      if (this.isExists()) {
        this.clear()
        return e.preventDefault()
      }

      this.add(this.inputTarget.value)
      this.clear()

      e.preventDefault()
    }
  }

  add(name) {
    const tag = document.importNode(this.templateTarget, true)
    const input = tag.content.querySelector('input')
    input.value = name
    this.namesTarget.appendChild(tag.content)
  }

  remove(e) {
    this.namesTarget.removeChild(e.target.parentNode)
  }

  clear() {
    this.inputTarget.value = ''
  }

  isExists() {
    for (let input of this.namesTarget.querySelectorAll('input')) {
      if (input.value == this.inputTarget.value) {
        return true
      }
    }
    return false
  }

  get defaultNames() {
    return JSON.parse(this.data.get('defaultNames'))
  }
}
