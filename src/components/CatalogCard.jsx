import React , {useContext} from 'react'

import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { Stack, CardActionArea } from '@mui/material';

import { AppContext } from '../App';

const CatalogCard = (props) => {
  const {setDisplayRecipe, setRecipe, setDisplayGenerator} = useContext(AppContext);

  const handleCard = () => {
    setDisplayRecipe(true)
    setRecipe(props.name)
    setDisplayGenerator(false)
    return
  }

  return (
    <Card sx={{ maxWidth: {xs: '46vw', md: '30vw', lg: '24vw'},}}>
      <CardActionArea onClick={handleCard}>
          <CardMedia
            component="img"
            height="140"
            image= {props.recipe.img}
            alt={'cooked' + props.name}
          />
          <CardContent sx={{height: {xs: 'auto', sm:'140px'}}}>
            <Typography gutterBottom variant="h5" component="div" sx={{
              fontSize: {xs: '1.1em', sm:'1.6em'}
            }}>
              {props.recipe.name}
            </Typography>
            <Typography variant="body2" color="text.secondary" sx={{
              fontSize: {xs: '0.8em', sm:'1em'}
            }}>
              Source: {props.recipe.source}
            </Typography>
            <Stack
              direction="row"
              spacing={0.7}
              alignItems="center"
              color="text.secondary"
              sx={{marginTop: '5px', fontSize: {xs: '0.85em', sm:'1em'}}}
              >
                <i className="fa-solid fa-clock"></i>
                <Typography variant="body2" sx={{fontSize: 'inherit'}}>{props.recipe.preparation}</Typography>
                <i className="fa-solid fa-fire-burner"></i>
                <Typography variant="body2" sx={{fontSize: 'inherit'}}>{props.recipe.cooking}</Typography>
            </Stack>

          </CardContent>
      </CardActionArea>
    </Card>
  )
}

export default CatalogCard