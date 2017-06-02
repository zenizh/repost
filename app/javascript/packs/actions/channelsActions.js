export const SET_CHANNELS = 'SET_CHANNELS'

export function fetchCurrentUserChannels(currentUser) {
  const options = {
    headers: {
      'USER_EMAIL': currentUser.email,
      'USER_TOKEN': currentUser.token
    }
  }
  return (dispatch) => {
    return fetch('/api/me/channels', options)
      .then(response => response.json())
      .then(response => dispatch(receiveChannels(response)))
  }
}

function receiveChannels(channels) {
  return {
    type: SET_CHANNELS,
    channels
  }
}
