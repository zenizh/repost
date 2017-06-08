import { FETCH_SERVICES } from '../actions/servicesActions'

const initialState = []

function services(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES+ '_SUCCESS':
      return action.payload.data
    default:
      return state
  }
}

export default services
