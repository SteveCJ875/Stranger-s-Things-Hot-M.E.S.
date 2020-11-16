import React, { useEffect, useState }  from 'react';
import { makeStyles } from '@material-ui/core/styles';
import MenuIcon from '@material-ui/icons/Menu';
import {AppBar, Toolbar, Button, IconButton, Typography} from "@material-ui/core"

const useStyles = makeStyles((theme) => ({
    root: {
      flexGrow: 1,
      //background
    },
    menuButton: {
      marginRight: theme.spacing(2),
    },
    title: {
      flexGrow: 1,
    },
  }));
  

const HeaderComponent = () => {
    //const classes = useStyles();
    return <AppBar position="absolute" style={{background: "#008080"}}>
  <Toolbar>
   
      Stanger Things
  
  </Toolbar>
</AppBar>

    
  




}

export default HeaderComponent;