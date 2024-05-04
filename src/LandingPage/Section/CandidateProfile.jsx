import React from 'react'
import "./CandidateProfile.css"
import CustomizedProgressBars from './ProgeesBar';



const CandidateProfile = () => {
    return (
        <div>
      <div className='profileWrapper'>
        CandidateProfile
        <div className='status'>
            <p>Behavioural</p>
            <><CustomizedProgressBars /></>
        </div>
        <div className='status'>
            <p>Communication</p>
            <><CustomizedProgressBars /></>
        </div>
        <div className='status'>
            <p>Stituation handling</p>
            <><CustomizedProgressBars /></>
        </div>
        </div>
      </div>
    );
  };
  

export default CandidateProfile