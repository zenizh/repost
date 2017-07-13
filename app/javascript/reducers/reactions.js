import { FETCH_REACTIONS, CREATE_REACTION } from '../actions/reactionsActions'
import { SET_POST } from '../actions/postActions'

const initialState = []

function reactions(state = initialState, action) {
  switch (action.type) {
    case FETCH_REACTIONS + '_SUCCESS':
      return action.payload.data
    case CREATE_REACTION + '_SUCCESS':
      // TODO: Count up existing emoji
      return [...state, action.payload.data]
    case SET_POST:
      return initialState
    default:
      return state
  }
}

export default reactions
