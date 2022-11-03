import { createSlice } from '@reduxjs/toolkit'

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