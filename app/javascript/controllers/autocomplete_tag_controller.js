import { Controller } from 'stimulus'
import { Textarea, Textcomplete } from 'textcomplete'
import { tagStrategy } from '../strategies/autocomplete'

export default class extends Controller {
  connect() {
    const customTagStrategy = {
      ...tagStrategy(this.tagNames),
      match: /(^|\s)(.+)$/,
      replace: (name) => {
        return `$1${name}`
      }
    }

    const editor = new Textarea(this.textarea)
    const textcomplete = new Textcomplete(editor)

    textcomplete.register([
      customTagStrategy
    ])
  }

  get textarea() {
    return this.targets.find('textarea')
  }

  get tagNames() {
    return JSON.parse(this.data.get('tag-names'))
  }
}
