import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'

import './App.css'
import MenuAppBar from './Components/MenuAppBar'
import TreeGrid from './Components/TreeGrid'

const theme = createMuiTheme({
  palette: {
    primary: {
      main: '#004d40'
    },
    secondary: {
      main: '#f44336'
    }
  }
})

const App = () => {
  return (
    <div className="App">
      <React.Fragment>
        <CssBaseline />

        <MuiThemeProvider theme={theme}>
          <MenuAppBar />
          <TreeGrid />
        </MuiThemeProvider>

      </React.Fragment>
    </div>
  )
}

export default App
