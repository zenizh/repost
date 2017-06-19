import { DELETE_SERVICE } from '../actions/serviceActions'
import { FETCH_SERVICES } from '../actions/servicesActions'

const initialState = []

function services(state = initialState, action) {
  switch (action.type) {
    case DELETE_SERVICE + '_SUCCESS':
      return state.filter((service) => {
        return service.id != action.payload.data.id
      })
    case FETCH_SERVICES + '_SUCCESS':
      return action.payload.data
    default:
      return state
  }
}

export default services
