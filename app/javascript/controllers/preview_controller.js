import { Controller } from 'stimulus'
import marked from 'marked'
import sanitizeHtml from 'sanitize-html'
import highlight from '../utils/highlight'

export default class extends Controller {
  static targets = ['body', 'textarea']

  initialize() {
    this.render()
  }

  input() {
    this.render()
  }

  render() {
    this.bodyTarget.innerHTML = sanitizeHtml(marked(this.textareaTarget.value), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2', 'del'])
    })
    highlight(this.bodyTarget)
  }
}
