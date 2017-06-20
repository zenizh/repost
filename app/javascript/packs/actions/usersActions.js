import endpoints from '../config/endpoints'

export const FETCH_USERS = 'FETCH_USERS'
export const FETCH_CHANNEL_USERS = 'FETCH_CHANNEL_USERS'
export const CLEAR_USERS = 'CLEAR_USERS'

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

export function fetchChannelUsers(url) {
  return {
    type: FETCH_CHANNEL_USERS,
    payload: {
      request: {
        url: url
      }
    }
  }
}

export function clearUsers() {
  return {
    type: CLEAR_USERS
  }
}
