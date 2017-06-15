import { EditorState } from 'draft-js'
import { SET_EDITOR_STATE } from '../actions/editorActions'

const initialState = {
  state: EditorState.createEmpty()
}

function editor(state = initialState, action) {
  switch (action.type) {
    case SET_EDITOR_STATE:
      return { ...state, state: action.state }
    default:
      return state
  }
}

export default editor
