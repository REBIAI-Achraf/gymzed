import React from 'react'
import './Header.css'
import { BsFacebook,BsInstagram } from "react-icons/bs";
import { FiAlignCenter} from "react-icons/fi";


const Header = () => {
  return (
<>
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
    <a className="navbar-brand" >Gym<span>Zed</span> Fitness</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <FiAlignCenter style={{color:'var(--color-primary)',fontSize:'25px'}}/>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a href="#"className="nav-link active " aria-current="page" >Home</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href="#About" >About Us</a>
        </li>
        <li className="nav-item">
          <a className="nav-link" href='/#Courses'>Classes</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='/#sch' >Schedules</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " href='/#Contact' >Contact</a>
        </li>
        <li className="nav-item">
          <a className="nav-link " ><BsFacebook/></a>
        </li>
        <li className="nav-item">
          <a className="nav-link " ><BsInstagram/></a>
        </li>
      </ul>
    </div>
  </div>
</nav>
</> 
 )
}

export default Header
