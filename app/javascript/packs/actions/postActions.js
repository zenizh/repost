export const SET_POST = 'SET_POST'
export const UNSET_POST = 'UNSET_POST'
export const SET_STAR = 'SET_STAR'
export const UNSET_STAR = 'UNSET_STAR'

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

export function setStar(url) {
  return {
    type: SET_STAR,
    payload: {
      request: {
        url: url,
        method: 'post'
      }
    }
  }
}

export function unsetStar(url) {
  return {
    type: UNSET_STAR,
    payload: {
      request: {
        url: url,
        method: 'delete'
      }
    }
  }
}
