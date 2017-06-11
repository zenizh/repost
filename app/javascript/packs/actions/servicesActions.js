import endpoints from '../config/endpoints'

export const FETCH_SERVICES = 'FETCH_SERVICES'
export const CREATE_SERVICE = 'CREATE_SERVICE'

export function fetchServices() {
  return {
    type: FETCH_SERVICES,
    payload: {
      request: {
        url: endpoints.services
      }
    }
  }
}

export function createService(service) {
  return {
    type: CREATE_SERVICE,
    payload: {
      request: {
        url: endpoints.services,
        method: 'post',
        data: service
      }
    }
  }
}
