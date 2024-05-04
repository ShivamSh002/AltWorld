import React from 'react'
import SideTab from './SideTab'
import "./LandingPage.css"
import Section from './Section/Section'

const LandingPage = () => {
  return (
    <div className='wrapper'>
      <div className='sideTabWrapper'><SideTab/></div>
      <div><Section/></div>
      

    </div>
  )
}

export default LandingPage