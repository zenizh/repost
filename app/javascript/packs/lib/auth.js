import { routerActions } from 'react-router-redux'
import { UserAuthWrapper } from 'redux-auth-wrapper'

export const Authenticated = UserAuthWrapper({
  authSelector: state => state.currentUser,
  failureRedirectPath: '/sign_in',
  predicate: currentUser => currentUser.signedIn,
  redirectAction: routerActions.replace
})

export const NotAuthenticated = UserAuthWrapper({
  authSelector: state => state.currentUser,
  failureRedirectPath: '/',
  predicate: currentUser => !currentUser.signedIn,
  redirectAction: routerActions.replace
})
