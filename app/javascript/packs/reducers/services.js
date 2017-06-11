import { FETCH_SERVICES } from '../actions/servicesActions'
import { DELETE_SERVICE } from '../actions/serviceActions'

const initialState = []

function services(state = initialState, action) {
  switch (action.type) {
    case FETCH_SERVICES + '_SUCCESS':
      return action.payload.data
    case DELETE_SERVICE + '_SUCCESS':
      return state.filter((service) => {
        return service.id != action.payload.data.id
      })
    default:
      return state
  }
}

export default services
