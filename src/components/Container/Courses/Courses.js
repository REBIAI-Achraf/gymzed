import React, { useEffect } from 'react';
import AOS from 'aos';import './Courses.css'
import CoursesCard from '../../CoursesCard/CoursesCard'

import CoursesData from '../../../Data/CoursesData'
const Courses = () => {
  useEffect(() => {
    AOS.init({
      duration: 800, 
      offset:100,
      easing: 'ease-in-out',         });
  }, []);

  const CoursesCards = CoursesData.map( Course => {
      return <CoursesCard key={Course.id} method={Course.method} duration={Course.duration} image={Course.image}title={Course.title} coach={Course.coach}
       price={Course.price} info={Course.info}   />
  })

  return (
    <div className='Courses' id="Courses">
        <div className='title'>
            <h4>Get A Perfect Body </h4>
            <h2>Our Training Classes</h2>
        </div>
        <div className='Courses-cards'>
          {CoursesCards}

        </div>
    </div>
  )
}

export default Courses