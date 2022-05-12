import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App';

import { Box } from '@mui/material'

const Recipe = (props) => {
  const { setDisplayRecipe } = useContext(AppContext);
  const handleClick = () => {
    setDisplayRecipe(false)
    return
  }


  return (
    
      <Box onClick={handleClick} id='recipeDisplay'
        sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100vh',
        display: 'flex',
        flexDirection: 'flex-row',
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'background.default'
      }}>
        {props.name}

      </Box>
    
  )
}

export default Recipe