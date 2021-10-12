import * as React from 'react';
import AppBar from '@material-ui/core/AppBar';
import Box from '@material-ui/core/Box';
import Toolbar from '@material-ui/core/Toolbar';
import Button from '@material-ui/core/Button';

export const Menu = ({menuItems = []}) => {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
        {menuItems.map( item =>   <Button color="inherit">{item}</Button>)}
        </Toolbar>
      </AppBar>
    </Box>
  )
}