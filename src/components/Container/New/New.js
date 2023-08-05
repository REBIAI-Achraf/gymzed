import React, { useEffect } from 'react';
import AOS from 'aos';
import './New.css'
import {Button3} from '../../Buttons/Button'
const New = () => {
    useEffect(() => {
        AOS.init({ });
      }, []);
    return (
    <div className='New' >
        <div className='new1'>
            <h2 data-aos="fade-up" data-aos-duration="1000" className='new-title'>New to GymZed</h2>
            <p data-aos="fade-up" data-aos-duration="1200">Your membership is up to 2 months FREE ($62.50 per month)</p>
            <p data-aos="fade-up" data-aos-duration="1200">Gymso is free HTML template by Tooplate for your commercial website. 
                Bootstrap v4.2.1 Layout. Feel free to use it</p> <br/>
           
              <Button3>Become a member today</Button3>
          
        </div>
         <div className="new2" >
          <h2 data-aos="fade-up" data-aos-duration="1000">Working Hours</h2>
        <br/>
        <ul >
            <li data-aos="fade-up" data-aos-duration="1200">Sunday : closed </li>
            <p></p>
            <li data-aos="fade-up" data-aos-duration="1200">Monday - Friday</li>
            <p>7:00 AM - 11:00 PM</p>
            <li data-aos="fade-up" data-aos-duration="1200">Saturday </li>
            <p>6:00 AM - 5:00 PM</p>
        </ul>
        </div> 

    </div>
  )
}

export default New