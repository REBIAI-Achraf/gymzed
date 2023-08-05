import React from 'react'
import './Footer.css'
import {HiPhone}from "react-icons/hi"
import {FaEnvelope}from "react-icons/fa"

const Footer = () => {
  return (
    <div className='Footer'>
     <div className='F1'>
      <p>
        Copyright © 2020 GymZed Fitness Co.</p>
        <p>All rights reserved.</p>
     </div>
     <div className='F2'> 
      <p> <span className='icon'><FaEnvelope/></span> hello@company.co </p>
      <p><span className='icon'><HiPhone/></span> 010-020-0840</p>
      </div>
    </div>
  )
}

export default Footer