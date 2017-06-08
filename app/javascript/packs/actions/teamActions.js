import endpoints from '../config/endpoints'

export const SET_TEAM = 'SET_TEAM'

export function setTeam(team) {
  return {
    type: SET_TEAM,
    payload: {
      request: {
        url: endpoints.team,
        method: 'patch',
        data: team
      }
    }
  }
}

export function fetchTeam() {
  return {
    type: SET_TEAM,
    payload: {
      request: {
        url: endpoints.team
      }
    }
  }
}
