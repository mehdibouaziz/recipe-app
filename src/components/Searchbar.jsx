import React, {useContext} from 'react';
import { OutlinedInput, Box } from '@mui/material';
import { AppContext } from '../App';
import HighlightOffIcon from '@mui/icons-material/HighlightOff';
import { Stack, InputAdornment } from '@mui/material';



const Searchbar = () => {
    const {isDark, setFilter, filter} = useContext(AppContext);
    let backColor = {backgroundColor: 'white'}
    isDark && (backColor.backgroundColor = 'rgb(76, 92, 117)')

    const handleSearch = (e) => {
        setFilter(e.target.value);
        return
    }
    const clearFilter = () => {
        setFilter('');
        return
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
      };

    return (
        <Box sx={{
            // position: 'fixed',
            // top: 0,
            // left: 0,
            width: '99vw',
            height: {xs: '120px', sm:'140px'},

            display: 'flex',
            flexDirection: 'row',
            alignItems: 'flex-end',
            justifyContent: 'center',
            marginBottom: '15px'
        }}>
            <Stack direction="row" spacing={1} justifyContent='center' alignItems='center'>
                <OutlinedInput
                    value={filter}
                    label=""
                    onInput={handleSearch}
                    variant="outlined"
                    placeholder='Search...'
                    id='search-bar'
                    sx={{
                            ...backColor,
                            width: {sm: '25vw', md: '20vw', lg: '15vw'},
                            transition:  'width 0.3s',
                            "&:focus-within":{
                            width: {sm: '40vw', md: '35vw', lg: '30vw'},
                            }}}
                    endAdornment={<InputAdornment position="end">{filter.length>0 && (<HighlightOffIcon onClick={clearFilter} onMouseDown={handleMouseDownPassword} sx={{cursor:'pointer'}}/>)}</InputAdornment>}
                />

            </Stack>
        </Box>
    )
}

export default Searchbar