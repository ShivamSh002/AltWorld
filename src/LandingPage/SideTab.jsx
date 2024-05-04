import React from 'react'
import Logo from "../assets/Logo.png"
import "./SideBar.css"
import { FaHome } from "react-icons/fa";
import { IoMdAdd } from "react-icons/io";

const SideTab = () => {
  return (
    <div  className='sideTab' > <div className='headWrapper'><img src={Logo} alt="Logo" width={35}/>
    <div className='head'><strong >Hi, AltWorld</strong></div>
  
    </div>
    <br/>
    <hr/>
    <div className='headWrapper'>
       <div className='dhbLogo'>
    <FaHome style={{ color: '#22b8a7 ',fontSize: '24px'}} />
   
    </div>
    <h3>DashBoard</h3>
     
    </div>
    <div className='card'><div className='icon'><IoMdAdd  style={{ opacity:"0.5"}}/></div>
    <h3>New Assignment?</h3>
    <p>Select from pre-ddefined questions to have a quick turnaround</p>
    <button>Create New Assignment</button>
    </div>
    </div>
   
   
  )
}

export default SideTab