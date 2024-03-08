import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant";
import {  addPopularMovies } from "../utils/movieslice";
import { useEffect } from "react";


const usePopularMovies=async()=>{
   
    const dispatch=useDispatch()
    const popularMovies=useSelector((store)=>store.movies.popularMovies)
    const getPopularMovies= async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/popular',API_OPTIONS)
       const json= await data.json()
       console.log(json)
       dispatch(addPopularMovies(json.results))
    
}
    useEffect(()=>{
        !popularMovies && getPopularMovies();
    },[])
}
export default usePopularMovies