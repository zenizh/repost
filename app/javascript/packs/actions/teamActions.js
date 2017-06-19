import endpoints from '../config/endpoints'

export const FETCH_TEAM = 'FETCH_TEAM'
export const UPDATE_TEAM = 'UPDATE_TEAM'

export function fetchTeam() {
  return {
    type: FETCH_TEAM,
    payload: {
      request: {
        url: endpoints.team
      }
    }
  }
}

export function updateTeam(team) {
  return {
    type: UPDATE_TEAM,
    payload: {
      request: {
        url: endpoints.team,
        method: 'patch',
        data: team
      }
    }
  }
}
