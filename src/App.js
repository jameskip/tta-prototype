import React from 'react'
import CssBaseline from '@material-ui/core/CssBaseline'
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import { BrowserRouter as Router, Route, Link } from 'react-router-dom'
import Routes from './routes.js'

import './App.css'
import MenuAppBar from './Components/MenuAppBar'
import ApprovalGrid from './Components/ApprovalGrid'

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
          <Routes />
        </MuiThemeProvider>

      </React.Fragment>
    </div>
  )
}

export default App
