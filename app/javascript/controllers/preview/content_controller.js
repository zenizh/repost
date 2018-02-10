import { Controller } from 'stimulus'
import marked from 'marked'
import sanitizeHtml from 'sanitize-html'
import highlight from '../../utils/highlight'
import emojis from '../../utils/emojis.json'

export default class extends Controller {
  static targets = ['body', 'textarea']

  connect() {
    this.render()
  }

  input() {
    this.render()
  }

  render() {
    this.bodyTarget.innerHTML = sanitizeHtml(marked(this.textareaTarget.value), {
      allowedTags: sanitizeHtml.defaults.allowedTags.concat(['h1', 'h2', 'del'])
    })

    this.bodyTarget.innerHTML = this.bodyTarget.innerHTML.replace(/:([\w+-]+):/g, (match, name) => {
      if (emojis[name]) {
        return `<img src="${emojis[name]}" width="20" height="20" class="text-middle" />`
      } else {
        return match
      }
    })

    highlight(this.bodyTarget)
  }
}
