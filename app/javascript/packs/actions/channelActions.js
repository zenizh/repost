export const FETCH_CHANNEL = 'FETCH_CHANNEL'
export const SET_CHANNEL = 'SET_CHANNEL'

export function fetchChannel(url) {
  return {
    type: FETCH_CHANNEL,
    payload: {
      request: {
        url: url
      }
    }
  }
}

export function setChannel(channel) {
  return {
    type: SET_CHANNEL,
    channel
  }
}
