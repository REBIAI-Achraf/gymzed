import React from 'react'
import './Header.css'
import { BsFacebook,BsInstagram } from "react-icons/bs";
import { FiAlignCenter} from "react-icons/fi";


const Header = () => {
  const onClick0 = () => {
    window.location.href = "#";
  };
  const onClick = () => {
    window.location.href = "#About";
  };
  const onClick2 = () => {
    window.location.href = "#Courses";
  };
  const onClick3 = () => {
    window.location.href = "#Schedules";
  };
  const onClick4 = () => {
    window.location.href = "#Contact";
  };

return (
<>
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid ">
    <button className="navbar-brand">Gym<span>Zed</span> Fitness</button>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <FiAlignCenter style={{color:'var(--color-primary)',fontSize:'25px'}}/>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <button className="nav-link active " onClick={onClick0}aria-current="page" >Home</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={onClick} >About</button>
        </li>
        <li className="nav-item">
          <button className="nav-link" onClick={onClick2}>Classes</button>
        </li>
        <li className="nav-item">
          <button className="nav-link " onClick={onClick3} >Schedules</button>
        </li>
        <li className="nav-item">
          <button className="nav-link " onClick={onClick4} >Contact</button>
        </li>
        <li className="nav-item">
          <button className="nav-link " ><BsFacebook/></button>
        </li>
        <li className="nav-item">
          <button className="nav-link " ><BsInstagram/></button>
        </li>
      </ul>
    </div>
  </div>
</nav>
</> 
 )
}

export default Header
