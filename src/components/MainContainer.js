import React from 'react'
import { useSelector } from 'react-redux'
import VideoBackground from './VideoBackground'
import VideoTitle from './VideoTitle'

const MainContainer = () => {
  const movies=useSelector((store)=>store.movies?.nowPlayingMovies)
  if(!movies) return;
  const mainMovie=movies[0]
  console.log(mainMovie)
  const {id,title,overview}=mainMovie

  return (
    <div className='pt-[30%]  bg-black md:pt-0'>
<VideoTitle title={title} description={overview} />
      <VideoBackground movie_id={id}/>
    </div>
  )
}

export default MainContainer