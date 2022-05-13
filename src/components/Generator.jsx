import React from 'react'
import { useContext } from 'react'
import { AppContext } from '../App';
import recipes from "../data/recipeBook.json";


import { TextField, Box, Button } from '@mui/material';
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
  const { setDisplayGenerator, isDark } = useContext(AppContext);
  const recipeCatalog = JSON.parse(JSON.stringify(recipes))

  const handleClose = () => {
    setDisplayGenerator(false)
    return
  }
  const copyToClipboard = () => {
    const copyText = document.getElementById("generator-output");
    copyText.select();
    copyText.setSelectionRange(0, 99999);
    navigator.clipboard.writeText(copyText.value);
    alert('Recipe JSON copied to clipboard');
    return
  }


  const generateJSON = () => {
    let id = Object.keys(recipeCatalog).length +1
    let instructions = document.getElementById('generator-instructions').value.split(".").map(val => val.trim()).filter(val => val.length>0).join('.",\n"')
    let ingredients = document.getElementById('generator-ingredients').value.split("\n").join('.",\n"')

    let recipeJSON = '"' + id.toString().padStart(4,'0')
    recipeJSON += '":\n{\n'
    recipeJSON += '"url": "' + document.getElementById('generator-url').value + '",\n'
    recipeJSON += '"img": "' + document.getElementById('generator-img').value + '",\n'
    recipeJSON += '"name": "' + document.getElementById('generator-name').value + '",\n'
    recipeJSON += '"source": "' + document.getElementById('generator-source').value + '",\n'
    recipeJSON += '"description": "' + '",\n'
    recipeJSON += '"preparation": "' + document.getElementById('generator-preparation').value + '",\n'
    recipeJSON += '"cooking": "' + document.getElementById('generator-cooking').value + '",\n'
    recipeJSON += '"servings": "' + document.getElementById('generator-servings').value + '",\n'
    recipeJSON += '"level": ' + document.getElementById('generator-level').value + ',\n'
    recipeJSON += '"ingredients": [\n"' + ingredients + '"\n],\n'
    recipeJSON += '"instructions": [\n"' + instructions + '."\n]'
    recipeJSON += '\n},'


    document.getElementById('generator-output').value = recipeJSON
    
  }

  let backColor = {backgroundColor: 'white'}
    isDark && (backColor.backgroundColor = 'rgb(76, 92, 116)')
  const input = {
    ...backColor
  }

  return (
    
      <Box id='recipeDisplay'
        sx={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '96vh',
        paddingTop: '4vh',
        display: 'flex',
        flexDirection: 'flex-row',
        alignItems: 'top',
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
        
        <Grid container spacing={1} sx={{
          marginTop: {xs: '70px', sm:'85px'},
          marginBottom: {xs: '70px', sm:'85px'},
          width: {xs: '90%', sm:'80%', md: '70%', lg: '70%'},
          justifyContent: 'space-between'
        }}>
          <Grid item xs={5}>
          <Stack spacing={2}>

            <TextField
              id='generator-url'
              label='Recipe URL'
              size="small"
              fullWidth
              sx={input}
            />
            <TextField
              id='generator-img'
              label='Image URL'
              size="small"
              fullWidth
              sx={input}
            />
            <TextField
              id='generator-name'
              label='Recipe name'
              size="small"
              fullWidth
              sx={input}
            />
            <TextField
              id='generator-source'
              label='Recipe source'
              size="small"
              fullWidth
              sx={input}
            />
            <Stack direction="row" spacing={2}>
                <TextField
                  id='generator-preparation'
                  label='Prep time'
                  size="small"
                  fullWidth
                  sx={input}
                />
                <TextField
                  id='generator-cooking'
                  label='Cooking time'
                  size="small"
                  fullWidth
                  sx={input}
                />
            </Stack>
            <Stack direction="row" spacing={2}>
                <TextField
                  id='generator-servings'
                  label='How many servings?'
                  size="small"
                  fullWidth
                  sx={input}
                />
                <TextField
                  id='generator-level'
                  label='Recipe difficulty ? [1-4]'
                  size="small"
                  fullWidth
                  sx={input}
                />
            </Stack>
            <TextField
              id='generator-ingredients'
              label='Recipe ingredients'
              size="small"
              fullWidth
              multiline
              rows={6}
              sx={input}
            />
            <TextField
              id='generator-instructions'
              label='Recipe instructions'
              size="small"
              fullWidth
              multiline
              rows={6}
              sx={input}
            />

          </Stack></Grid>

          <Grid item xs ={5}>
            <Stack spacing={2}>
              <Button variant="contained" onClick={generateJSON}>Generate recipe</Button>
              <TextField
                id='generator-output'
                size="small"
                fullWidth
                multiline
                placeholder='Output'
                inputProps={{ readOnly: true, }}
                rows={23}
                sx={input}
              />
              <Button variant="contained" onClick={copyToClipboard}>Copy</Button>
            </Stack>
          </Grid>

        </Grid>

      </Box>
    
  )
}

export default Generator