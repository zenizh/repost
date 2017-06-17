import endpoints from '../config/endpoints'
import { history } from '../config/store'

export const AUTHORIZE_AUTHOR = 'AUTHORIZE_AUTHOR'
export const REDIRECT = 'REDIRECT'

export function redirectTo(url) {
  history.push(url)
  return {
    type: REDIRECT
  }
}

export function authorizeAuthor(id) {
  const url = endpoints.mePost(id)
  return {
    type: AUTHORIZE_AUTHOR,
    payload: {
      request: {
        url: url
      }
    }
  }
}
