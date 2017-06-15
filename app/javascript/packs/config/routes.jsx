import React from 'react'
import { Route } from 'react-router'
import { Authenticated, NotAuthenticated } from './auth'
import SignIn from '../features/SignIn'
import SignUp from '../features/SignUp'
import Home from '../features/Home'
import EditAccount from '../features/EditAccount'
import Channel from '../features/Channel'
import NewPost from '../features/NewPost'
import Services from '../features/Services'
import NewService from '../features/NewService'
import EditService from '../features/EditService'
import TeamSettings from '../features/TeamSettings'
import SignOut from '../features/SignOut'

const Routes = (props) => {
  return (
    <div>
      <Route path="/sign_in" component={NotAuthenticated(SignIn)} />
      <Route path="/sign_up" component={NotAuthenticated(SignUp)} />
      <Route exact path="/" component={Authenticated(Home)} />
      <Route path="/account/edit" component={Authenticated(EditAccount)} />
      <Route path="/channels/:id" component={Authenticated(Channel)} />
      <Route path="/posts/new" component={Authenticated(NewPost)} />
      <Route path="/team/services/new" component={Authenticated(NewService)} />
      <Route path="/team/services/:id/edit" component={Authenticated(EditService)} />
      <Route path="/team/services" component={Authenticated(Services)} />
      <Route path="/team/settings" component={Authenticated(TeamSettings)} />
      <Route path="/sign_out" component={Authenticated(SignOut)} />
    </div>
  )
}

export default Routes
