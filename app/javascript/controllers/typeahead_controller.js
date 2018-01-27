import { Controller } from 'stimulus'

export default class extends Controller {
  connect() {
    this.filteredItems = []
    this.hideMenu()
  }

  keydown(e) {
    if (e.key == 'ArrowUp' || e.key == 'ArrowDown') {
      e.preventDefault()
    }

    if (e.key == 'Enter' && this.index != null) {
      this.selectItem(this.filteredItems[this.index])
    }
  }

  keyup(e) {
    if (e.key == 'ArrowUp') {
      this.subIndex()
      this.setActiveClass()
      return
    }

    if (e.key == 'ArrowDown') {
      this.addIndex()
      this.setActiveClass()
      return
    }

    this.filterItems()
    this.render()
    this.clearIndex()

    if (this.filteredItems.length > 0) {
      this.showMenu()
    } else {
      this.hideMenu()
    }
  }

  blur() {
    this.hideMenu()
  }

  mousedown(e) {
    this.selectItem(e.target.textContent)
  }

  subIndex() {
    switch (this.index) {
      case null:
        break
      case 0:
        this.clearIndex()
        break
      default:
        this.index -= 1
    }
  }

  addIndex() {
    if (this.filteredItems.length == 0) {
      return
    }

    switch (this.index) {
      case this.filteredItems.length - 1:
        break
      case null:
        this.index = 0
        break
      default:
        this.index += 1
    }
  }

  clearIndex() {
    this.index = null
  }

  setActiveClass() {
    const items = this.menu.querySelectorAll('li')

    items.forEach((item) => {
      item.classList.remove('active')
    })

    if (this.index != null) {
      items[this.index].classList.add('active')
    }
  }

  filterItems() {
    // /$^/ does not match anything
    const regex = (this.input.value == '') ? /$^/ : new RegExp(this.input.value, 'i')

    this.filteredItems = this.items.filter((item) => {
      return item.match(regex)
    })
  }

  render() {
    this.clearMenu()

    this.filteredItems.forEach((item) => {
      const template = document.importNode(this.template, true)
      const li = template.content.querySelector('li')
      li.textContent = item
      this.menu.appendChild(template.content)
    })
  }

  selectItem(value) {
    this.hideMenu()
    this.input.value = value
    this.input.dispatchEvent(new KeyboardEvent('keypress', {
      key: 'Enter'
    }))
  }

  showMenu() {
    this.menu.style.display = 'block'
  }

  hideMenu() {
    this.menu.style.display = 'none'
  }

  clearMenu() {
    while (this.menu.firstChild) {
      this.menu.removeChild(this.menu.firstChild)
    }
  }

  get items() {
    return JSON.parse(this.data.get('items'))
  }

  get filteredItems() {
    return JSON.parse(this.data.get('filtered-items'))
  }

  get index() {
    if (this.data.get('index')) {
      return parseInt(this.data.get('index'))
    } else {
      return null
    }
  }

  get template() {
    return this.targets.find('template')
  }

  get input() {
    return this.targets.find('input')
  }

  get menu() {
    return this.targets.find('menu')
  }

  set filteredItems(filteredItems) {
    this.data.set('filtered-items', JSON.stringify(filteredItems))
  }

  set index(index) {
    if (index == null) {
      this.data.delete('index')
    } else {
      this.data.set('index', index)
    }
  }
}
