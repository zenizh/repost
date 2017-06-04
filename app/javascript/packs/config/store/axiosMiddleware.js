import axios from 'axios'
import axiosMiddleware from 'redux-axios-middleware'

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
            request.headers['USER_EMAIL'] = currentUser.email
            request.headers['USER_TOKEN'] = currentUser.token
          }

          return request
        }
      }
    ]
  }
}

const middleware = axiosMiddleware(client, config)

export default middleware
