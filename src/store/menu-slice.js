import { createSlice } from "@reduxjs/toolkit";
 export const menuSlice = createSlice({
    name:'menuSlice',
    initialState:{
        menuList:[]
    },
    reducers:{
        setMenu:(currentSlice,action)=>{
            currentSlice.menuList = action.payload
        }
    },
 });

 export const menuReducer = menuSlice.reducer;
 export const {setMenu} =  menuSlice.actions

