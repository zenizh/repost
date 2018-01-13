import { Controller } from 'stimulus'

export default class extends Controller {
  connect() {
    this.render()
  }

  toggle(e) {
    this.starred = !this.starred
    this.render()
  }

  render() {
    if (this.starred) {
      this.star.style.display = 'none'
      this.unstar.style.display = 'block'
    } else {
      this.star.style.display = 'block'
      this.unstar.style.display = 'none'
    }
  }

  get starred() {
    return this.data.get('starred') == 'true'
  }

  get star() {
    return this.targets.find('star')
  }

  get unstar() {
    return this.targets.find('unstar')
  }

  set starred(starred) {
    this.data.set('starred', starred)
  }
}
