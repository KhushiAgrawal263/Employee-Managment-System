import React from 'react'
import './Calendars.css';
import {useState} from 'react';
import Calendar from 'react-calendar'; 
import Sidebar from '../Sidebar';
import NavBar from '../NavBar';

const Calendars = () => {
  const [date, setDate] = useState(new Date())

return (
  <>
    <Sidebar/>
    <NavBar/>
    <div className='calendarBg'>
    <div className="calendar">
      <h1 className="Calheader">
      <img src="https://img.icons8.com/color/48/null/overtime.png"/>
        SCHEDULE </h1>
      <div className="calendar-container">
        <Calendar onChange={setDate} value={date}/>
      </div>
      <div className="text-center">
          Selected date: {date.toDateString()}
      </div>
    </div>
    </div>
    </>
  )
}

export default Calendars