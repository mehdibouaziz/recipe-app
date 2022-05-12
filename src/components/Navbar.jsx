import React from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
    Box,
  } from "@mui/material";
import IconButton from "@mui/material/IconButton";
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';
import AddCircleOutlineIcon from '@mui/icons-material/AddCircleOutline';

import useScrollTrigger from "@mui/material/useScrollTrigger";

import logo from '../images/chef.png'



const Navbar = (props) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
        });

    const scrollToTop = () => {
      document.getElementById('search-bar').scrollIntoView({
        behavior: 'smooth',
        block: 'end',
        inline: 'nearest'
      })
      return
    }


  return (
    <AppBar
      className="navbar"
      id="navbar"
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        backgroundColor: "rgb(27, 37, 59)",
        color: 'white',
        transition: "background-color 0.5s",
        backgroundImage: 'none'
      }}
    >
      <Toolbar>
        <Box sx={{
          display: 'flex',
          flexDirection: 'flex-row',
          alignItems: 'center',
          justifyContent: 'flex-start',
          flexGrow: 1,
          marginLeft: {sm: '0', md: '5vw', lg: '10vw'},
        }}>
          <img
            src={logo}
            alt="App Logo"
            style={{
              height: "30px",
              marginRight: "15px",
            }}
          ></img>

          <Typography
            variants="button"
            component="div"
            onClick={scrollToTop}
            sx={{
              fontFamily: "'Patrick Hand', cursive",
              margin: 0,
              padding: 0,
              textAlign: "left",
              fontSize: "1.7em",
              fontWeight: 900,
              cursor: 'pointer'
            }}
          >
          
            {' A+M RECIPES'}
          </Typography>
        </Box>

        <IconButton onClick={props.toggleGenerator} color="inherit">
          <AddCircleOutlineIcon />
        </IconButton>
        <IconButton onClick={props.setTheme} color="inherit">
          {props.theme ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar