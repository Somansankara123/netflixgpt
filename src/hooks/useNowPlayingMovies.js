import { useDispatch, useSelector } from "react-redux";
import { API_OPTIONS } from "../utils/constant"
import { addNowPlayingMovies } from "../utils/movieslice";
import { useEffect } from "react";


const useNowPlayingMovies=async()=>{
   
    const dispatch=useDispatch()
    const nowPlayingMovies=useSelector(store=>store.movies.nowPlayingMovies)
    const getMovies= async()=>{
        const data=await fetch('https://api.themoviedb.org/3/movie/now_playing?page=1',API_OPTIONS)
       const json= await data.json()
       console.log(json)
       dispatch(addNowPlayingMovies(json.results))
    
}
    useEffect(()=>{
       !nowPlayingMovies && getMovies()
    },[])
}
export default useNowPlayingMovies