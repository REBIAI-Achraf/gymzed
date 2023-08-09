import React, { useEffect } from 'react';
import AOS from 'aos';
import './Schedules.css'
import { FaCalendarAlt } from "react-icons/fa";
const Schedules = () => {
    useEffect(() => {
        AOS.init({
          duration: 800, 
          offset:100,
          easing: 'ease-in-out',         });
      }, []);

  return (
    <div className="ScheduleView" id='Schedules'>
        <div className="Schedultitle" data-aos="fade-up" data-aos-duration="1000">    
        <h4>our weekly GYM schedules</h4>
        <h2>Workout Timetable</h2>
        </div>
        <div className="timetable" data-aos="fade-up" data-aos-duration="1200">
            <table>
                <thead>
                <tr className="blue">
                    <td ><FaCalendarAlt/></td>
                    <td>Monday</td>
                    <td>Tuesday</td>
                    <td>Wednesday</td>
                    <td>Thursday</td>
                    <td>Friday</td>
                    <td>Saturday</td>
                </tr>
                </thead>
                <tbody>
                <tr>
                    <td className="blue">7:00 AM</td>
                    <td>Cardio </td>
                    <td>Fitness</td>
                    <td></td>
                    <td>Thursday</td>
                    <td></td>
                    <td></td>
                </tr>
                <tr>
                    <td className="blue">9:00 AM</td>
                    <td></td>
                    <td></td>
                    <td>Boxing</td>
                    <td></td>
                    <td>Areobic</td>
                    <td>Cardio</td>
                </tr>
                <tr>
                    <td className="blue">11:00 AM</td>
                    <td>Boxing</td>
                    <td>Areobic</td>
                    <td></td>
                    <td></td>
                    <td>Bodywork</td>
                    <td></td>
                </tr>
                <tr>
                    <td className="blue">2:00 PM</td>
                    <td>Boxing</td>
                    <td>Powwer Lifting</td>
                    <td></td>
                    <td></td>
                    <td>Cardio</td>
                    <td>Crossfit</td>
                </tr>
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Schedules