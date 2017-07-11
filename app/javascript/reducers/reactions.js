import { CREATE_REACTION } from '../actions/reactionsActions'

const initialState = []

function reactions(state = initialState, action) {
  switch (action.type) {
    case CREATE_REACTION + '_SUCCESS':
      return [...state, action.payload.data]
    default:
      return state
  }
}

export default reactions
