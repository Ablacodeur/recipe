import { createSlice } from "@reduxjs/toolkit";
 export const recipeSlice = createSlice({
    name:'recipeSlice',
    initialState:{
        recipeList:[]
    },
    reducers:{
        setRecipe:(currentSlice,action)=>{
            currentSlice.recipeList = action.payload
        }

    },
 });

 export const recipeReducer = recipeSlice.reducer;
 export const {setRecipe} =  recipeSlice.actions

