import { createSlice } from '@reduxjs/toolkit'
import mainReducer from '../slices/mainSlice'

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        loading: false,
    },
    reducers: {

    }
});

// export reducers
export const { } = mainSlice.actions

export default mainSlice.reducer