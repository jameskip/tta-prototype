import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'

import './App.css'
import MenuAppBar from './Components/MenuAppBar'
import TreeGrid from './Components/TreeGrid'

function App () {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />

        <MenuAppBar />
        <TreeGrid />

      </React.Fragment>
    </div>
  )
}

export default App
