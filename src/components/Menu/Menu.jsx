import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';
import styles from './Menu.style'

export const Menu = ({menuItems = []}) => {
  const classes = styles();
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        {menuItems.map( ({id , component}) =>   <Button key={id} className={classes.button}>{component}</Button>)}
        </Toolbar>
      </AppBar>
    </Box>
  )
}