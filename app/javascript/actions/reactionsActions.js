import endpoints from '../config/endpoints'

export const FETCH_REACTIONS = 'FETCH_REACTIONS'
export const CREATE_REACTION = 'CREATE_REACTION'

export function fetchReactions(id) {
  const url = endpoints.postReactions(id)
  return {
    type: FETCH_REACTIONS,
    payload: {
      request: {
        url: url
      }
    }
  }
}

export function createReaction(id, name) {
  const url = endpoints.postReactions(id)
  return {
    type: CREATE_REACTION,
    payload: {
      request: {
        url: url,
        method: 'post',
        data: {
          name
        }
      }
    }
  }
}
