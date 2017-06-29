import { FETCH_TEAM, UPDATE_TEAM } from '../actions/teamActions'

const initialState = {
  name: null
}

function team(state = initialState, action) {
  switch (action.type) {
    case FETCH_TEAM + '_SUCCESS':
    case UPDATE_TEAM + '_SUCCESS':
      return action.payload.data
    default:
      return state
  }
}

export default team
