import endpoints from '../config/endpoints'

export const FETCH_SERVICES = 'FETCH_SERVICES'

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
