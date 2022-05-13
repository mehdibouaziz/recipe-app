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
import Generator from './components/Generator';


export const AppContext = createContext();

const App = () => {
  const [isDark, setIsDark] = useState(false);
  const [displayRecipe, setDisplayRecipe] = useState(false);
  const [displayGenerator, setDisplayGenerator] = useState(false);
  const [recipe, setRecipe] = useState('');
  const [filter, setFilter] = useState('');

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

  const toggleGenerator = () => {
    setDisplayGenerator(!displayGenerator)
    setDisplayRecipe(false)
    return
  }


  return (
    <div className="App">
      <AppContext.Provider value={{isDark, setIsDark, setDisplayRecipe, displayRecipe, setRecipe, filter, setFilter, setDisplayGenerator}}>
        <ThemeProvider theme={darkTheme}>
          <Navbar theme={isDark} setTheme={switchTheme} toggleGenerator={toggleGenerator}/>
        </ThemeProvider>

        <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
          <CssBaseline />

          {!displayRecipe && (<Searchbar />)}
          {!displayRecipe && (<Catalog />)}

          <Fade in={displayRecipe}>{<Box>{displayRecipe && (<Recipe name={recipe}/>)}</Box>}</Fade>
          <Fade in={displayGenerator}>{<Box>{displayGenerator && (<Generator name={recipe}/>)}</Box>}</Fade>

          <Footer />
        </ThemeProvider>
      </AppContext.Provider>

    </div>
  );
}

export default App;
