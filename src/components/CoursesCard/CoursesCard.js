import React from 'react'
import './CoursesCard.css'

const CoursesCard = (props) => {
  return (
            <div className='card' data-aos={props.method} data-aos-duration={props.duration} >
              <img src={props.image}alt='yogaclass'/>
              <div className='card-info'>
              <h3>{props.title}</h3>
              <h4><span>Trained by -</span> {props.coach}</h4>
              <a>{props.price}</a>
              <p>{props.info}</p>
              </div>
            </div>
    )
}

export default CoursesCard