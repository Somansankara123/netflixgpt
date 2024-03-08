import React from 'react'

const VideoTitle = (props) => {
  const{title,description}=props
  return (
   
    <div className='w-screen aspect-video  px-6 md:px-24  pt-[20%] absolute text-white bg-gradient-to-r from-black'>
<h2 className='text-2xl  md:text-6xl font-bold'>{title}</h2>
<p  className=' hidden md:inline-block py-6 text-lg w-1/4'>{description}</p>
<div className='my-4 md:m-0'>
  <button className=' bg-white py-1 text-black p-2 md:py-4 px-3 md:px-12 text-xl rounded-lg hover:bg-opacity-80'>
     ▶️Play
  </button>
  <button className='hidden md:inline-block mx-2  bg-gray-500 text-white p-4 px-12 text-xl bg-opacity-50 rounded-lg'>More Info</button>
</div>
    </div>
  )
}

export default VideoTitle