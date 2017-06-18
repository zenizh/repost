import { SET_TEAM, FETCH_TEAM } from '../actions/teamActions'

const initialState = {
  name: null
}

function team(state = initialState, action) {
  switch (action.type) {
    case SET_TEAM + '_SUCCESS':
    case FETCH_TEAM + '_SUCCESS':
      return action.payload.data
    default:
      return state
  }
}

export default team
