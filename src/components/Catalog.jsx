import React, {useContext} from 'react'
import { AppContext } from '../App';


import recipes from "../data/recipeBook.json";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


import CatalogCard from './CatalogCard';
import { Typography } from '@mui/material';

const Catalog = () => {
  const {filter} = useContext(AppContext);
  const recipeCatalog = JSON.parse(JSON.stringify(recipes))

  const filteredCatalog = Object.keys(recipeCatalog).filter(key => {
    return recipeCatalog[key].name.toLowerCase().includes(filter.toLowerCase())
  })

  const catalog = filteredCatalog.map((key, index) => {
    return <Grid item xs={6} md={4} lg={3} key={'recipe-' + index}><CatalogCard recipe={recipeCatalog[key]} name={key}  /></Grid>
  })

  return (
    <Container>
      {filteredCatalog.length === 0 && (<Container><Typography textAlign='center'>{'Sorry, no match :('}</Typography></Container>)}
      <Grid container spacing={1} sx={{
        paddingTop: {xs: '0px', sm:'15px'},
        marginBottom: '15px',
        alignItems: 'center',
      }}>
        {catalog}
        
      </Grid>
    </Container>
  )
}

export default Catalog