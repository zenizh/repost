import endpoints from '../config/endpoints'

export const FETCH_CHANNELS = 'FETCH_CHANNELS'

export function fetchChannels() {
  return {
    type: FETCH_CHANNELS,
    payload: {
      request: {
        url: endpoints.meChannels
      }
    }
  }
}
