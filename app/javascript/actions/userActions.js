import endpoints from '../config/endpoints'

export const FETCH_USER = 'FETCH_USER'

export function fetchUser(id) {
  const url = endpoints.user(id)
  return {
    type: FETCH_USER,
    payload: {
      request: {
        url: url
      }
    }
  }
}
