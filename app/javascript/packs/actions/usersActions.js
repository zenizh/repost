export const FETCH_CHANNEL_USERS = 'FETCH_CHANNEL_USERS'

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
