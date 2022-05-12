import React from 'react'

import recipes from "../data/recipeBook.json";

import Grid from '@mui/material/Grid';
import Container from '@mui/material/Container';


import CatalogCard from './CatalogCard';

const Catalog = () => {
  const recipeCatalog = JSON.parse(JSON.stringify(recipes))

  const catalog = Object.keys(recipeCatalog).map((key, index) => {
    return <Grid item xs={6} md={4} lg={3}><CatalogCard recipe={recipeCatalog[key]} name={key} key={'recipe-' + index} /></Grid>
  })

  return (
    <Container>
      <Grid container spacing={1} sx={{
        paddingTop: {xs: '0px', sm:'15px'},
        alignItems: 'center'
      }}>
        {catalog}{catalog}{catalog}{catalog}{catalog}{catalog}{catalog}{catalog}{catalog}
      </Grid>
    </Container>
  )
}

export default Catalog