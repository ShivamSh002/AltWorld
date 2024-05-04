import React from 'react'
import CandidateList from './CandidateList'
import CandidateProfile from './CandidateProfile'
import "./Section.css"


const Section = () => {
  return (
    <div>
      <div><span>Pages{" "}</span><span>/ Assignment</span></div>
    <h3>Sales BDE</h3>
    <div className='ComponentWrapper'>
    <div> <CandidateList/></div>
     <div><CandidateProfile/></div>
     </div>

    </div>
  )
}

export default Section