import React, { useEffect } from 'react';
import AOS from 'aos';
import './Hello.css'
import coach1 from '../../../assets/images/coach1.jpg'
import coach2 from '../../../assets/images/team-image01.jpg'
import { BsInstagram } from "react-icons/bs";

const Hello = () => {
  useEffect(() => {
    AOS.init({});
  }, []);
  return (
    <div className="Hello" id="About">
<div className="Hello1"data-aos="fade-up" data-aos-duration="900">
  <h2>Hello, We are GymZed</h2>
  <br/>
  <p>ou are NOT allowed to redistribute this HTML template downloadable ZIP file on any template collection site. You are allowed to use this template for your personal or business websites.
If you have any question regarding Gymso Fitness HTML template, you can contact Tooplate immediately. Thank you.</p>
  
</div>

<div className="Hello2">

<div className="Card" data-aos="fade-up" data-aos-duration="1200">
  <img src={coach1} alt='coach1'/>
  <div className="info">
<h4>Cbum</h4>
<p>Fitness coach &nbsp;<BsInstagram  className='insta'/></p>
</div>

</div>

<div className="Card" data-aos="fade-up" data-aos-duration="1400">
  <img src={coach2} alt='coach1'/>
  <div className="info">
<h4>Clara</h4>
<p>Fitness coach &nbsp;<BsInstagram className='insta'/></p>

</div>
</div>
</div>
    </div>
  )
}

export default Hello