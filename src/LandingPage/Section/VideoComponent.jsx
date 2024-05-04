import React from 'react'
import "./VideoComponent.css"
import image from "../../assets/user.jpg"
import { MdOutlinePlayCircleFilled } from "react-icons/md";
import { MdKeyboardDoubleArrowLeft } from "react-icons/md";
import { MdKeyboardDoubleArrowRight } from "react-icons/md";

const VideoComponent = () => {
  return (
    <div className='videoWrapper'><div className='video'>
  
         <img src={image} width={400} height={600}/>
         <div className='playIcon'><MdOutlinePlayCircleFilled  style={{color : "white" ,fontSize : "80px"}} /></div>
         <div className='leftArrow'><MdKeyboardDoubleArrowLeft/></div>
         <div className='videodisp'><p>Tell me about yourself</p>
         <p>Question 1/11</p></div>
         <div className='rightArrow'><MdKeyboardDoubleArrowRight/></div>
       </div></div>
  )
}

export default VideoComponent