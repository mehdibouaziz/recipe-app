import React from 'react'

import {
    AppBar,
    Toolbar,
    Typography,
    Link,
    Box,
    Menu,
    MenuItem,
    TextField,
    OutlinedInput,
  } from "@mui/material";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import SearchIcon from '@mui/icons-material/Search';
import Brightness4Icon from '@mui/icons-material/Brightness4';
import Brightness7Icon from '@mui/icons-material/Brightness7';

import useScrollTrigger from "@mui/material/useScrollTrigger";

import logo from '../images/chef.png'



const Navbar = (props) => {
    const trigger = useScrollTrigger({
        disableHysteresis: true,
        threshold: 100,
        });

    const [anchorEl, setAnchorEl] = React.useState(null);

    let open = Boolean(anchorEl);

    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

  return (
    <AppBar
      className="navbar"
      id="navbar"
      position="fixed"
      elevation={trigger ? 4 : 0}
      sx={{
        backgroundColor: trigger ? "rgb(27, 37, 59)" : "rgb(27, 37, 59)",
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
            sx={{
              fontFamily: "'Patrick Hand', cursive",
              margin: 0,
              padding: 0,
              textAlign: "left",
              fontSize: "1.7em",
              fontWeight: 900,
            }}
          >
          
            {' A+M RECIPES'}
          </Typography>
        </Box>

        <IconButton onClick={props.setTheme} color="inherit">
          {props.theme ? <Brightness7Icon /> : <Brightness4Icon />}
        </IconButton>


        <IconButton
          id="navigation-button"
          aria-label="navigation"
          aria-controls={open ? "navigation-menu" : undefined}
          aria-haspopup="true"
          aria-expanded={open ? "true" : undefined}
          onClick={handleClick}
          sx={{ display: { xs: "block", sm: "none" }, marginRight: "0" }}
        >
          <SearchIcon />
        </IconButton>
        
        <Menu
          id="navigation-menu"
          anchorEl={anchorEl}
          open={open}
          onClose={handleClose}
          MenuListProps={{
            "aria-labelledby": "navigation-button",
          }}
          sx={{'& .MuiPaper-root': {
              backgroundColor: '#000',
              backgroundImage: 'none'
          }}}
        >
          <Link href="#landing" underline="none" color="inherit">
            <MenuItem id="menu-home" onClick={handleClose}>
              Home
            </MenuItem>
          </Link>
          <Link href="#about" underline="none" color="inherit">
            <MenuItem id="menu-about" onClick={handleClose}>
              About Me
            </MenuItem>
          </Link>
          <Link href="#portfolio" underline="none" color="inherit">
            <MenuItem id="menu-portfolio" onClick={handleClose}>
              Portfolio
            </MenuItem>
          </Link>
          <Link href="#contact" underline="none" color="inherit">
            <MenuItem id="menu-contact" onClick={handleClose}>
              Contact
            </MenuItem>
          </Link>
        </Menu>
        
      </Toolbar>
    </AppBar>
  )
}

export default Navbar