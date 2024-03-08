 import { configureStore } from "@reduxjs/toolkit";
 import userSlice from "./userSlice";
import movieReducer from "./movieslice";
import GptSlice from "./GptSlice";
import configSlice from "./configSlice";
 const appStore=configureStore({
    reducer:{
        user:userSlice,
        movies:movieReducer,
        GPT:GptSlice,
        config:configSlice
    }
 })
 export  default appStore