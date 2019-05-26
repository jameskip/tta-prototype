import React from 'react'
import { NavLink } from 'react-router-dom'

import { makeStyles } from '@material-ui/core/styles'
import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import AccountCircle from '@material-ui/icons/AccountCircle'
import Switch from '@material-ui/core/Switch'
import FormControlLabel from '@material-ui/core/FormControlLabel'
import FormGroup from '@material-ui/core/FormGroup'
import MenuItem from '@material-ui/core/MenuItem'
import Menu from '@material-ui/core/Menu'
import ImageSearch from '@material-ui/icons/ImageSearch'
import NaturePeople from '@material-ui/icons/NaturePeople'
import Tooltip from '@material-ui/core/Tooltip'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  },
  menuIcon: {
    color: '#ffffff'
  }
}))

const MenuAppBar = () => {
  const classes = useStyles()
  const [auth, setAuth] = React.useState(true)
  const [anchorEl, setAnchorEl] = React.useState(null)
  const open = Boolean(anchorEl)

  const handleChange = (event) => setAuth(event.target.checked)

  const handleMenu = (event) => setAnchorEl(event.currentTarget)

  const handleClose = () => setAnchorEl(null)

  return (
    <div className={classes.root}>

      <AppBar position="static" color='primary'>
        <Toolbar>
        <NavLink className={classes.menuIcon} to="/">
          <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="Menu">
            <MenuIcon />
          </IconButton>
          </NavLink>

          <Tooltip title="Approve">
            <IconButton
              className={classes.menuIcon}
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >

              <NavLink className={classes.menuIcon} to="/approve">
                <ImageSearch />
              </NavLink>
            </IconButton>
          </Tooltip>

          <Tooltip title="Trees">

            <IconButton
              aria-owns={open ? 'menu-appbar' : undefined}
              aria-haspopup="true"
              onClick={() => {}}
              color="inherit"
            >
              <NavLink className={classes.menuIcon} to="/trees">

                <NaturePeople />

              </NavLink>
            </IconButton>
          </Tooltip>

          <Typography variant="h6" className={classes.title}>
            TreeTracker Admin
          </Typography>

          <FormGroup>
            <FormControlLabel
              control={<Switch checked={auth} onChange={handleChange} aria-label="LoginSwitch" />}
              label={auth ? 'Logout' : 'Login'}
            />
          </FormGroup>

          {auth && (
            <div>

              <IconButton
                aria-owns={open ? 'menu-appbar' : undefined}
                aria-haspopup="true"
                onClick={handleMenu}
                color="inherit"
              >
                <AccountCircle />
              </IconButton>

              <Menu
                id="menu-appbar"
                anchorEl={anchorEl}
                anchorOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                transformOrigin={{
                  vertical: 'top',
                  horizontal: 'right'
                }}
                open={open}
                onClose={handleClose}
              >
                <MenuItem onClick={handleClose}>Profile</MenuItem>
                <MenuItem onClick={handleClose}>My account</MenuItem>
              </Menu>

            </div>
          )}

        </Toolbar>
      </AppBar>
    </div>
  )
}

export default MenuAppBar
