import endpoints from '../config/endpoints'

export const SIGN_UP = 'SIGN_UP'
export const SIGN_IN = 'SIGN_IN'
export const SIGN_OUT = 'SIGN_OUT'
export const UPDATE_CURRENT_USER = 'UPDATE_CURRENT_USER'

export function signUp(email, password) {
  return {
    type: SIGN_UP,
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

export function signIn(email, password) {
  return {
    type: SIGN_IN,
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

export function signOut() {
  return {
    type: SIGN_OUT
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
