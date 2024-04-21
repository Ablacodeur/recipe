import { configureStore } from "@reduxjs/toolkit";
import { recipeReducer } from "./recipe-slice";
import { menuReducer } from "./menu-slice";
 
export const store = configureStore({
    reducer:{
        RECIPE: recipeReducer,
        MENU: menuReducer,
    },
 })