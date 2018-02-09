import { Controller } from 'stimulus'
import { Textarea, Textcomplete } from 'textcomplete'
import { emojiStrategy, mentionStrategy, tagStrategy, textcompleteOptions } from '../../utils/autocomplete'

export default class extends Controller {
  static targets = ['textarea']

  initialize() {
    const editor = new Textarea(this.textareaTarget)
    const textcomplete = new Textcomplete(editor, textcompleteOptions)

    textcomplete.register([
      emojiStrategy,
      mentionStrategy(this.userScreenNames),
      tagStrategy(this.tagNames)
    ])
  }

  get tagNames() {
    return JSON.parse(this.data.get('tagNames'))
  }

  get userScreenNames() {
    return JSON.parse(this.data.get('userScreenNames'))
  }
}
