import { convertToRaw } from 'draft-js'
import endpoints from '../config/endpoints'

export const CREATE_POST = 'CREATE_POST'
export const SET_POST = 'SET_POST'
export const UNSET_POST = 'UNSET_POST'
export const SET_STAR = 'SET_STAR'
export const UNSET_STAR = 'UNSET_STAR'

export function createPost(editorState) {
  const content = editorState.getCurrentContent()
  return {
    type: CREATE_POST,
    payload: {
      request: {
        url: endpoints.posts,
        method: 'post',
        data: {
          content: content.getPlainText(),
          editorState: JSON.stringify(convertToRaw(content))
        }
      }
    }
  }
}

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
