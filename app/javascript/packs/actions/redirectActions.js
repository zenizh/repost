import endpoints from '../config/endpoints'
import { history } from '../config/store'

export const REDIRECT = 'REDIRECT'

export function redirectTo(url) {
  history.push(url)
  return {
    type: REDIRECT
  }
}
