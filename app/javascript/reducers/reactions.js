import { FETCH_REACTIONS, CREATE_REACTION } from '../actions/reactionsActions'
import { SET_POST } from '../actions/postActions'

const initialState = []

function reactions(state = initialState, action) {
  switch (action.type) {
    case FETCH_REACTIONS + '_SUCCESS':
      return action.payload.data
    case CREATE_REACTION + '_SUCCESS':
      return [...state.filter((reaction) => {
        if (reaction.name != action.payload.data.name) {
          return true
        }
      }), action.payload.data]
    case SET_POST:
      return initialState
    default:
      return state
  }
}

export default reactions
