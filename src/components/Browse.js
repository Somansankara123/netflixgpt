import React from 'react'
import Header from './Header'
import MainContainer from './MainContainer'
import SecondaryContainer from './SecondaryContainer'
import useNowPlayingMovies from '../hooks/useNowPlayingMovies'
import usePopularMovies from '../hooks/usePopularMovies'
import GptSearch from './GptSearch'
import { useSelector } from 'react-redux'

const Browse = () => {
  const showGpt=useSelector((store)=>store.GPT.showGptSearch)
  useNowPlayingMovies()
  usePopularMovies()
  return (
    <div>
    <Header/>
    {
   showGpt ?(

   <GptSearch/>):
    (<>
    <MainContainer/>
    <SecondaryContainer/>
    </>)
    
    }
    </div>
  )
}

export default Browse