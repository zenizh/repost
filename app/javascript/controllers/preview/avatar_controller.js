import { Controller } from 'stimulus'

export default class extends Controller {
  static targets = ['image']

  change(e) {
    const files = e.target.files

    const reader = new FileReader()
    reader.readAsDataURL(files[0])
    reader.onload = () => {
      this.imageTarget.src = reader.result
    }
  }
}
