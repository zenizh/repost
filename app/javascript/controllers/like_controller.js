import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['active', 'inactive', 'count']

  connect() {
    this.render()
  }

  click() {
    this.isLiked ? this.count-- : this.count++
    this.isLiked = !this.isLiked
    this.render()
  }

  render() {
    this.isLiked ? this.showActive() : this.showInactive()
    this.countTarget.innerText = this.count
  }

  showActive() {
    this.activeTarget.style.display = 'inline'
    this.inactiveTarget.style.display = 'none'
  }

  showInactive() {
    this.activeTarget.style.display = 'none'
    this.inactiveTarget.style.display = 'inline'
  }

  get count() {
    return parseInt(this.data.get('count'))
  }

  get isLiked() {
    return this.data.get('isLiked') == 'true'
  }

  set count(count) {
    this.data.set('count', count)
  }

  set isLiked(isLiked) {
    this.data.set('isLiked', isLiked)
  }
}
