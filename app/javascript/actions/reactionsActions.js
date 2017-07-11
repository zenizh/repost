import endpoints from '../config/endpoints'

export const CREATE_REACTION = 'CREATE_REACTION'

export function createReaction(id, name) {
  const url = endpoints.postReaction(id)
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
