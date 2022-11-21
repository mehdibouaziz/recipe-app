import { createSlice } from '@reduxjs/toolkit'

export const mainSlice = createSlice({
    name: 'main',
    initialState: {
        recipeEdit: {
            sourceUrl: "",
            img: "",
            name: "",
            sourceName: "",
            preparation: "",
            cooking: "",
            servings: "",
            level: "",
            ingredients: [],
            instructions: [],
            description: "",
        }

    },
    reducers: {
        loadEditRecipe: (state, action) => {
            // store recipe data to load in edit form
            // payload is recipe object, id is accesible via url params
            state.recipeEdit = {...action.payload}
        },
    }
});

// export reducers
export const { loadEditRecipe } = mainSlice.actions

export default mainSlice.reducer