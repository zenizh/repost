import endpoints from '../config/endpoints'

export const FETCH_CHANNEL_USERS = 'FETCH_CHANNEL_USERS'
export const CLEAR_CHANNEL_USERS = 'CLEAR_CHANNEL_USERS'

export function fetchChannelUsers(channelId) {
  const url = endpoints.channelUsers(channelId)
  return {
    type: FETCH_CHANNEL_USERS,
    payload: {
      request: {
        url: url
      }
    }
  }
}

export function clearChannelUsers() {
  return {
    type: CLEAR_CHANNEL_USERS
  }
}
