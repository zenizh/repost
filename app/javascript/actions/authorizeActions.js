import endpoints from '../config/endpoints'

export const AUTHORIZE_AUTHOR = 'AUTHORIZE_AUTHOR'

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
