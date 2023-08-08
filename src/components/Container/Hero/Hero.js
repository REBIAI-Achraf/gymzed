import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import './Hero.css'
import { GiAbdominalArmor } from "react-icons/gi";
import Button, { Button2 } from '../../Buttons/Button';
const Hero = () => {
  useEffect(() => {
    AOS.init({ });
  }, []);
  return (
    <div className="hero">
    <div className="hero-h2" data-aos="fade-up" data-aos-duration="1000">
      <h2>new way to build a healthy lifestyle !</h2>
      </div>
    <div className="hero-h1" data-aos="fade-up" data-aos-duration="1500">
      <h1>Upgrade your <span><GiAbdominalArmor /></span> at<br/> Gymzed Fitness !</h1></div> 
    <div  data-aos="fade-up" data-aos-duration="1700">
    <Button>Get Started</Button>
    <Button2 href="#About">Learn More</Button2>
    </div>
    </div>
  )
}

export default Hero
