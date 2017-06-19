import React from 'react'
import { Route } from 'react-router'
import { OnlyUser, OnlyGuest, OnlyOwner } from './auth'
import SignIn from '../features/SignIn'
import SignUp from '../features/SignUp'
import Home from '../features/Home'
import EditAccount from '../features/EditAccount'
import Channel from '../features/Channel'
import NewPost from '../features/NewPost'
import EditPost from '../features/EditPost'
import Services from '../features/Services'
import NewService from '../features/NewService'
import EditService from '../features/EditService'
import TeamSettings from '../features/TeamSettings'
import SignOut from '../features/SignOut'
import Alert from '../containers/Alert'
import Redirector from '../containers/Redirector'

const Routes = (props) => {
  return (
    <div>
      <Redirector />
      <Alert />
      <Route path="/sign_in" component={OnlyGuest(SignIn)} />
      <Route path="/sign_up" component={OnlyGuest(SignUp)} />
      <Route exact path="/" component={OnlyUser(Home)} />
      <Route path="/account/edit" component={OnlyUser(EditAccount)} />
      <Route path="/channels/:id" component={OnlyUser(Channel)} />
      <Route path="/posts/new" component={OnlyUser(NewPost)} />
      <Route path="/posts/:id/edit" component={OnlyUser(EditPost)} />
      <Route path="/team/services/new" component={OnlyOwner(NewService)} />
      <Route path="/team/services/:id/edit" component={OnlyOwner(EditService)} />
      <Route path="/team/services" component={OnlyOwner(Services)} />
      <Route path="/team/settings" component={OnlyOwner(TeamSettings)} />
      <Route path="/sign_out" component={OnlyUser(SignOut)} />
    </div>
  )
}

export default Routes
