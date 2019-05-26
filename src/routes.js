import React from 'react'
import { Route, BrowserRouter } from 'react-router-dom'
import MenuAppBar from './Components/MenuAppBar'
import ApprovalGrid from './Components/ApprovalGrid'
import TreeGrid from './Components/TreeGrid'
import TreeList from './Components/TreeList'

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
    <Route exact path='/' component={() => 'DASHBOARD VIEW WILL GO HERE'} />
    <Route path='/approve' component={ApprovalGrid} />
    <Route path='/trees' component={TreeList} />
  </BrowserRouter>
)
