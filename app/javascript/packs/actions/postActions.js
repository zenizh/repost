import { convertToRaw } from 'draft-js'
import endpoints from '../config/endpoints'

export const CREATE_POST = 'CREATE_POST'
export const FETCH_POST = 'FETCH_POST'
export const UPDATE_POST = 'UPDATE_POST'
export const SET_POST = 'SET_POST'
export const CLEAR_POST = 'CLEAR_POST'
export const CREATE_STAR = 'CREATE_STAR'
export const DELETE_STAR = 'DELETE_STAR'

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

export function fetchPost(url) {
  return {
    type: FETCH_POST,
    payload: {
      request: {
        url: url
      }
    }
  }
}

export function updatePost(url, editorState) {
  const content = editorState.getCurrentContent()
  return {
    type: UPDATE_POST,
    payload: {
      request: {
        url: url,
        method: 'patch',
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

export function clearPost() {
  return {
    type: CLEAR_POST
  }
}

export function createStar(url) {
  return {
    type: CREATE_STAR,
    payload: {
      request: {
        url: url,
        method: 'post'
      }
    }
  }
}

export function deleteStar(url) {
  return {
    type: DELETE_STAR,
    payload: {
      request: {
        url: url,
        method: 'delete'
      }
    }
  }
}
