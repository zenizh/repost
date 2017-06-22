import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'
import { SIGN_OUT } from '../../actions/currentUserActions'

const client = axios.create({
  headers: {
    'Content-Type': 'application/json'
  }
})

const config = {
  interceptors: {
    request: [
      {
        success: ({ getState, dispatch, getSourceAction }, request) => {
          const { currentUser } = getState()

          if (currentUser.signedIn) {
            request.headers['USER_TOKEN'] = currentUser.token
          }

          return request
        }
      }
    ],
    response: [
      {
        error: ({ getState, dispatch, getSourceAction }, error) => {
          dispatch({
            type: SIGN_OUT
          })
          return error
        }
      }
    ]
  }
}

export default axiosMiddleware(client, config)
