import React from 'react'
import myVideo from "../assets/buss.mp4";
import "../App.css"; 

const VideoComponent = () => {
  return (
    <div className='video'>
      <video className='video1'src={myVideo} autoPlay muted loop >

      </video>
    </div>
  )
}

export default VideoComponent