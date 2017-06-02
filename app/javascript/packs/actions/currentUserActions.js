export const SET_CURRENT_USER = 'SET_CURRENT_USER'
export const UNSET_CURRENT_USER = 'UNSET_CURRENT_USER'

export function fetchCurrentUser(email, password) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }
  return (dispatch) => {
    return fetch('/api/session', options)
      .then(response => response.json())
      .then(response => dispatch(setCurrentUser(response)))
  }
}

export function requestSignUp(email, password) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({
      email,
      password
    })
  }
  return (dispatch) => {
    return fetch('/api/users', options)
      .then(response => response.json())
      .then(response => dispatch(setCurrentUser(response)))
  }
}

export function requestSignOut(currentUser) {
  const options = {
    method: 'DELETE',
    headers: {
      'USER_EMAIL': currentUser.email,
      'USER_TOKEN': currentUser.token
    }
  }
  return (dispatch) => {
    return fetch('/api/session', options)
      .then(() => dispatch(unsetCurrentUser()))
  }
}

function setCurrentUser(currentUser) {
  return {
    type: SET_CURRENT_USER,
    currentUser
  }
}

function unsetCurrentUser() {
  return {
    type: UNSET_CURRENT_USER
  }
}
