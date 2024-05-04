import React, { useState } from 'react'
import "./CandidateList.css"
import { MdEdit } from "react-icons/md";
import { IoCube } from "react-icons/io5";
import { IoDocumentsSharp } from "react-icons/io5";
import data from "../../mockdata.json"
import User from "../../assets/user.jpg"


const CandidateList = () => {
    const [candidates,setCandidates] =useState(data.candidates)
   console.log(candidates);
   

  return (
    <div className='candidateWrapper'>
        <div className='headContent'>
            <h2>Sales BDE</h2>
            <div >
                <span className='active'><h2>Active</h2></span>
                <span className='editIcon'><MdEdit /></span>
            </div>

        </div>

        <div className='description'>
            <p>Assignment Link</p>
            <p>---</p>
        </div>
        <div className='description'>
            <p>Assignment Hour</p>
            <p>3 hours</p>
        </div>
        <div className='description'>
            <p>Assignment Ends at</p>
            <p>11 March 2024</p>
        </div>

        <div className='btnWrapper'>
            <button className='btn1'><IoCube /> TO REVIEW</button>
            <button className='btn1' ><IoDocumentsSharp /> SHORTLISTED</button>
        </div>
      <table>
        <thead>
            <th className='tableHead'>Candidates</th>
            <th >Score</th>
        </thead>
        <tbody>
        {
                        candidates.map((candidate, idx) => (
                            <tr key={idx}>
                                <td className='tableData'><div><img src={User} alt="" width={45}/></div><div><span className='name'>{candidate.name}</span><br/>
                               <span className='email'> {candidate.email}</span></div></td>
                               <td className='score' style={{ color: candidate.average_score_percentage > 50 ? 'lightgreen' : 'rgb(244, 179, 15)' }}>
                                {candidate.average_score_percentage}%
                               </td>
                            </tr>
                        ))
                    }
        
        </tbody>
      </table>
     </div>

  )
}

export default CandidateList