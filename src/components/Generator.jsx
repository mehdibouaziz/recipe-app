import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App';

import { Box } from '@mui/material'
import Grid from '@mui/material/Grid';
import Typography from '@mui/material/Typography';
import Stack from '@mui/material/Stack';
import Divider from '@mui/material/Divider';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemText from '@mui/material/ListItemText';
import Link from '@mui/material/Link';


import IconButton from "@mui/material/IconButton";
import CloseIcon from '@mui/icons-material/Close';


const Generator = (props) => {
  const { setDisplayGenerator } = useContext(AppContext);

  const handleClose = () => {
    setDisplayGenerator(false)
    return
  }

  return (
    
      <Box id='recipeDisplay'
        sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'flex-row',
        alignItems: 'flex-start',
        justifyContent: 'center',
        backgroundColor: 'background.default',
        overflow: 'auto'
      }}>
        <IconButton onClick={handleClose} sx={{
          position: 'fixed',
          top: {xs: '60px', sm:'85px'},
          right: {xs: '5px', sm:'5vw'},
        }}>
          <CloseIcon />
        </IconButton>
        

      </Box>
    
  )
}

export default Generator