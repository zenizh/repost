import { CREATE_REACTION } from '../actions/reactionsActions'
import { SET_POST } from '../actions/postActions'

const initialState = []

function reactions(state = initialState, action) {
  switch (action.type) {
    case CREATE_REACTION + '_SUCCESS':
      return [...state, action.payload.data]
    case SET_POST:
      return initialState
    default:
      return state
  }
}

export default reactions
