import { Controller } from 'stimulus'
import { Textarea, Textcomplete } from 'textcomplete'
import { tagStrategy, textcompleteOptions } from '../../utils/autocomplete'

export default class extends Controller {
  static targets = ['textarea']

  initialize() {
    const customTagStrategy = {
      ...tagStrategy(this.tagNames),
      match: /(^|\s)(.+)$/,
      replace: (name) => {
        return `$1${name}`
      }
    }

    const editor = new Textarea(this.textareaTarget)
    const textcomplete = new Textcomplete(editor, textcompleteOptions)

    textcomplete.register([customTagStrategy])
  }

  get tagNames() {
    return JSON.parse(this.data.get('tagNames'))
  }
}
