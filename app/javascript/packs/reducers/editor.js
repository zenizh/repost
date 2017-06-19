import { EditorState, convertFromRaw } from 'draft-js'
import { SET_EDITOR_STATE } from '../actions/editorActions'
import { FETCH_POST } from '../actions/postActions'

const initialState = {
  state: EditorState.createEmpty()
}

function editor(state = initialState, action) {
  switch (action.type) {
    case SET_EDITOR_STATE:
      return { state: action.state }
    case FETCH_POST + '_SUCCESS':
      const editorState = restoreStateFromJSON(action.payload.data.editorState)
      return { state: editorState }
    default:
      return state
  }
}

function restoreStateFromJSON(json) {
  return EditorState.createWithContent(convertFromRaw(JSON.parse(json)))
}

export default editor
