import endpoints from '../config/endpoints'

export const CREATE_SUBSCRIPTION = 'CREATE_SUBSCRIPTION'
export const DELETE_SUBSCRIPTION = 'DELETE_SUBSCRIPTION'

export function createSubscription(userId, channelId) {
  const url = endpoints.userChannelSubscription(userId, channelId)
  return {
    type: CREATE_SUBSCRIPTION,
    payload: {
      request: {
        url: url,
        method: 'post'
      }
    }
  }
}

export function deleteSubscription(userId, channelId) {
  const url = endpoints.userChannelSubscription(userId, channelId)
  return {
    type: DELETE_SUBSCRIPTION,
    payload: {
      request: {
        url: url,
        method: 'delete'
      }
    }
  }
}
