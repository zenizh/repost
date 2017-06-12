import endpoints from '../config/endpoints'

export const FETCH_CURRENT_USER = 'FETCH_CURRENT_USER'
export const CREATE_USER = 'CREATE_USER'
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'
export const SIGN_OUT_USER = 'SIGN_OUT_USER'

export function fetchCurrentUser(email, password) {
  return {
    type: FETCH_CURRENT_USER,
    payload: {
      request: {
        url: endpoints.session,
        method: 'post',
        data: {
          email,
          password
        }
      }
    }
  }
}

export function createUser(email, password) {
  return {
    type: CREATE_USER,
    payload: {
      request: {
        url: endpoints.users,
        method: 'post',
        data: {
          email,
          password
        }
      }
    }
  }
}

export function updateCurrentUser(data) {
  return {
    type: UPDATE_CURRENT_USER,
    payload: {
      request: {
        url: endpoints.me,
        method: 'patch',
        data: data
      }
    }
  }
}

export function signOutUser() {
  return {
    type: SIGN_OUT_USER
  }
}
