import React, { useEffect } from 'react';
import AOS from 'aos';
import './Contact.css'
import Button3 from '../../Buttons/Button'
import { HiLocationMarker } from "react-icons/hi";

const Contact = () => {
    useEffect(() => {
        AOS.init({ });
      }, []);

  return (
    <div className="contact"id='Contact'>
     <div className="contact-form"data-aos="fade-up" data-aos-duration="1000">
        <h2>Feel free to ask anything</h2>
        <form>
            <input type="text" placeholder="Name"/>
            <input type="mail" placeholder="Email"/>
            <textarea cols="25" rows="8"placeholder='Message'/>
            <Button3>Send</Button3>
        </form>
        </div>
        <div className="map" data-aos="fade-up" data-aos-duration="1300">
            <h2>Where you can find us</h2>
            <p> <span><HiLocationMarker/></span> Commodo esse et do nostrud velit in nostrud nisi est nulla officia quis.</p>
            <hr/>
    <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d235203.11278519436!2d-43.608796333017345!3d-22.911576826306046!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x9bde559108a05b%3A0x50dc426c672fd24e!2sRio%20de%20Janeiro%2C%20%C3%89tat%20de%20Rio%20de%20Janeiro%2C%20Br%C3%A9sil!5e0!3m2!1sfr!2sdz!4v1691140384543!5m2!1sfr!2sdz" width="550" height="300"   loading="lazy" ></iframe>
        </div>
    </div>
  )
}

export default Contact