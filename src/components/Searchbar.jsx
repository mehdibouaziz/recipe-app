import React, {useContext} from 'react';
import { TextField, Box } from '@mui/material';
import { AppContext } from '../App';


const Searchbar = () => {
    const {isDark} = useContext(AppContext);
    let backColor = {}
    { isDark ? backColor = {backgroundColor: 'rgb(76, 92, 117)'} : backColor = {backgroundColor: 'white'} }

    return (
        <Box sx={{
            // position: 'fixed',
            // top: 0,
            // left: 0,
            width: '99vw',
            height: {xs: '140px', sm:'160px'},

            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            justifyContent: 'flex-end',
        }}>
            <TextField label="" variant="outlined" placeholder='Search...' sx={{
                borderColor: 'white',
                marginBottom: '15px',
                
                
                "& .MuiOutlinedInput-root":{
                    ...backColor,
                width: {sm: '25vw', md: '20vw', lg: '15vw'},
                transition:  'width 0.3s',
                },
                "& .Mui-focused":{
                width: {sm: '40vw', md: '35vw', lg: '30vw'},
                }
            }}/>
        </Box>
    )
}

export default Searchbar