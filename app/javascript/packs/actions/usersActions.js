export const SET_USERS = 'SET_USERS'

export function fetchChannelUsers(currentUser, url) {
  const options = {
    headers: {
      'USER_EMAIL': currentUser.email,
      'USER_TOKEN': currentUser.token
    }
  }
  return (dispatch) => {
    return fetch(url, options)
      .then(response => response.json())
      .then(response => dispatch(setChannelUsers(response)))
  }
}

function setChannelUsers(users) {
  return {
    type: SET_USERS,
    users
  }
}
