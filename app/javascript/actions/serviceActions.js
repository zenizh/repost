import endpoints from '../config/endpoints'

export const CREATE_SERVICE = 'CREATE_SERVICE'
export const FETCH_SERVICE = 'FETCH_SERVICE'
export const UPDATE_SERVICE = 'UPDATE_SERVICE'
export const DELETE_SERVICE = 'DELETE_SERVICE'

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

export function fetchService(url) {
  return {
    type: FETCH_SERVICE,
    payload: {
      request: {
        url: url
      }
    }
  }
}

export function updateService(url, service) {
  return {
    type: UPDATE_SERVICE,
    payload: {
      request: {
        url: url,
        method: 'patch',
        data: service
      }
    }
  }
}

export function deleteService(url) {
  return {
    type: DELETE_SERVICE,
    payload: {
      request: {
        url: url,
        method: 'delete'
      }
    }
  }
}
