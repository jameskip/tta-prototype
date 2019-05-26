import React from 'react'
import { Route, Switch, BrowserRouter } from 'react-router-dom'
import MenuAppBar from './Components/MenuAppBar'
import TreeGrid from './Components/TreeGrid'

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <>
      <MenuAppBar {...props}/>
      <TreeGrid {...props}/>
    </>
  )}/>
)

export default props => (
  <BrowserRouter>
    <Switch>
      <Route path='/' component={HomeRoute} />
    </Switch>
  </BrowserRouter>
)
