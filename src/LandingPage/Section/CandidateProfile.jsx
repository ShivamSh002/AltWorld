import React, { useEffect } from 'react'
import "./CandidateProfile.css"
import CustomizedProgressBars from './ProgeesBar';
import user from "../../assets/user.jpg"
import VideoComponent from './VideoComponent';



const CandidateProfile = ({filterData}) => {

  console.log("list:",filterData)
    
    return (
        <div className='profileCard'>
      <div className='profileWrapper'>
        <div className='info'> <img src={user} alt= "" width={100}/>
        <div className='user' ><div className='userName'>{filterData.name}</div>
        <div className='email'>{filterData.email}</div></div>
        <div className='percentage' style={{ color: filterData.average_score_percentage > 50 ? 'rgb(48, 215, 48)' : 'rgb(244, 179, 15)' }}>{filterData.average_score_percentage}%</div></div>
        
        <div className='status'>
            <p>Behavioural</p>
            <CustomizedProgressBars value={filterData?.scores?.behavioral}  />
        </div>
        <div className='status'>
            <p>Communication</p>
            <CustomizedProgressBars value={filterData?.scores?.communication}  />
        </div>
        <div className='status'>
            <p>Stituation handling</p>
            <CustomizedProgressBars value={filterData?.scores?.situation_handling} />
        </div>
        <div className='desciption'> 
         <h2 >About</h2>
         <p>{filterData.about}</p>
         <h2 >Experience</h2>
         <p>{filterData.experience}</p>
         <h2 >Hobbies</h2>
         <p>{filterData.hobbies}</p>
         <h2 >Introuction</h2>
         <p>{filterData.introduction}</p>
        </div>
        <button className='btn'>SHORTLIST</button>
        </div>
         <div><VideoComponent/></div>
       
      </div>
    );
  };
  

export default CandidateProfile