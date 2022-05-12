import React, { useState, createContext } from 'react';

import './App.css';

import Catalog from './components/Catalog';
import Navbar from './components/Navbar';
import Recipe from './components/Recipe';
import Footer from './components/Footer';
import Searchbar from './components/Searchbar';

import CssBaseline from "@mui/material/CssBaseline";
import { ThemeProvider, createTheme } from '@mui/material/styles';
import Fade from '@mui/material/Fade';
import { Box } from '@mui/system';


export const AppContext = createContext();

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [displayRecipe, setDisplayRecipe] = useState(false);
  const [recipe, setRecipe] = useState('');

  const darkTheme = createTheme({
    palette: {
      mode: 'dark',
      background: {
        default: 'rgb(36, 51, 71)',
        paper: 'rgb(50, 67, 92)'
      },
      text: {
        primary: 'rgb(230, 230, 230)'
      }

    },
  });
  const lightTheme = createTheme({
    palette: {
      mode: 'light',
      background: {
        default: "rgb(226, 234, 245)"
      }
    },
  });

  const switchTheme = () => {
    setIsDark(!isDark)
    return
  };

  return (
    <div className="App">
      <AppContext.Provider value={{isDark, setIsDark, setDisplayRecipe, displayRecipe, setRecipe}}>
        <ThemeProvider theme={darkTheme}>
          <Navbar theme={isDark} setTheme={switchTheme}/>
        </ThemeProvider>

        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <CssBaseline />
          <Searchbar/>
          <Catalog />

          <Fade in={displayRecipe}>{<Box><Recipe name={recipe}/></Box>}</Fade>

          <Footer />
        </ThemeProvider>
      </AppContext.Provider>

    </div>
  );
}

export default App;
