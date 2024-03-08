import { useDispatch, useSelector } from "react-redux"
import { API_OPTIONS } from "../utils/constant"
import { useEffect } from "react"
import { addTrailerVideo } from "../utils/movieslice"
const useMovieTrailer= (movie_id)=>{
      const dispatch=useDispatch()
      const trailerVideo=useSelector((store)=>store.movies.trailerVideo)
    
       const getMovieVideos=async ()=>{
        const data= await fetch('https://api.themoviedb.org/3/movie/'+ movie_id +'/videos?language=en-US', API_OPTIONS)
          const json=await data.json()
          const filterData=json.results.filter((video)=>video.type==="Trailer" || video.type=="")
          const trailer=filterData.length ?filterData[0]:json.results[0]
          console.log(trailer)
          dispatch(addTrailerVideo(trailer))
    }      
    useEffect(()=>{
          !trailerVideo && getMovieVideos()
    },[])
   
}
export default useMovieTrailer