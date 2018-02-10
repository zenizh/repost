import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['active', 'inactive']

  connect() {
    this.render()
  }

  click() {
    this.isStarred = !this.isStarred
    this.render()
  }

  render() {
    this.isStarred ? this.showActive() : this.showInactive()
  }

  showActive() {
    this.activeTarget.style.display = 'inline'
    this.inactiveTarget.style.display = 'none'
  }

  showInactive() {
    this.activeTarget.style.display = 'none'
    this.inactiveTarget.style.display = 'inline'
  }

  get isStarred() {
    return this.data.get('isStarred') == 'true'
  }

  set isStarred(isStarred) {
    this.data.set('isStarred', isStarred)
  }
}
