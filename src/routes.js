import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import MenuAppBar from './Components/MenuAppBar'
import ApprovalGrid from './Components/ApprovalGrid'
import TreeGrid from './Components/TreeGrid'

const HomeRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={props => (
    <>
      <MenuAppBar {...props}/>
      <ApprovalGrid {...props}/>
    </>
  )}/>
)

export default props => (
  <BrowserRouter>
    <Route path='/' component={MenuAppBar} />
    <Route path='/approve' component={ApprovalGrid} />
    <Route path='/trees' component={TreeGrid} />
  </BrowserRouter>
)
