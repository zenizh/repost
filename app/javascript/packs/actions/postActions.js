export const SET_POST = 'SET_POST'
export const UNSET_POST = 'UNSET_POST'

export function setPost(post) {
  return {
    type: SET_POST,
    post
  }
}

export function unsetPost() {
  return {
    type: UNSET_POST
  }
}
