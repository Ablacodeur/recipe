import { configureStore } from "@reduxjs/toolkit";
import { recipeReducer } from "./recipe-slice";
 
export const store = configureStore({
    reducer:{
        RECIPE: recipeReducer,
    },
 })