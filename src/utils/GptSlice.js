import { createSlice } from "@reduxjs/toolkit"
const GptSlice=createSlice(
    {
       name:'gpt',
       initialState:{
        showGptSearch:false,
        movieResults:null,
        movieNames:null
       },
       reducers:{
        toogleGptSearchView:(state,action)=>{
            state.showGptSearch=!state.showGptSearch
        },
        addGptMovieResult:(state,action)=>{
          const {movieNames,movieResults}=action.payload
          state.movieNames=movieNames
          state.movieResults=movieResults

        }
       }

    }
)
export  const {toogleGptSearchView,addGptMovieResult}=GptSlice.actions
export default GptSlice.reducer