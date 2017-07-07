import endpoints from '../config/endpoints'

export const FETCH_USERS = 'FETCH_USERS'

export function fetchUsers() {
  return {
    type: FETCH_USERS,
    payload: {
      request: {
        url: endpoints.users
      }
    }
  }
}
