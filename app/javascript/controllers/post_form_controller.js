import { Controller } from 'stimulus'
import marked from 'marked'
import sanitizeHtml from 'sanitize-html'

export default class extends Controller {
  input() {
    this.preview.innerHTML = sanitizeHtml(marked(this.content.value), { allowedTags: this.allowedTags })
  }

  get preview() {
    return this.targets.find('preview')
  }

  get content() {
    return this.element.querySelector('textarea')
  }

  get allowedTags() {
    return sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2', 'del'])
  }
}
