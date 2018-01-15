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
    this.body.innerHTML = sanitizeHtml(marked(this.textarea.value), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2', 'del'])
    })
  }

  get body() {
    return this.targets.find('body')
  }

  get textarea() {
    return this.targets.find('textarea')
  }
}
