import { Controller } from 'stimulus'
import marked from 'marked'
import sanitizeHtml from 'sanitize-html'

export default class extends Controller {
  connect() {
    this.render()
  }

  input() {
    this.render()
  }

  render() {
    this.preview.innerHTML = sanitizeHtml(marked(this.content.value), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2', 'del'])
    })
  }

  get preview() {
    return this.targets.find('preview')
  }

  get content() {
    return this.element.querySelector('textarea')
  }
}
