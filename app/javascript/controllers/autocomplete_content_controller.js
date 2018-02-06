import { Controller } from 'stimulus'
import { Textarea, Textcomplete } from 'textcomplete'
import { mentionStrategy, tagStrategy } from '../strategies/autocomplete'

export default class extends Controller {
  connect() {
    const editor = new Textarea(this.textarea)
    const textcomplete = new Textcomplete(editor, {
      dropdown: {
        item: {
          className: 'dropdown-item'
        }
      }
    })

    textcomplete.register([
      mentionStrategy(this.userScreenNames),
      tagStrategy(this.tagNames)
    ])
  }

  get textarea() {
    return this.targets.find('textarea')
  }

  get tagNames() {
    return JSON.parse(this.data.get('tag-names'))
  }

  get userScreenNames() {
    return JSON.parse(this.data.get('user-screen-names'))
  }
}
